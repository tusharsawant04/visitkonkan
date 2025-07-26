// src/pages/form/[trek].tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

// Import Firestore and Storage functions and the initialized instances
import { db, storage } from '../../../backend/lib/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Helper function to format the slug into a readable title
const formatTrekName = (slug: string): string => {
  if (!slug) return '';
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function TrekFormPage() {
  const router = useRouter();
  const { trek } = router.query;
  
  const [step, setStep] = useState(1); 
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);

  const [showTerms, setShowTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- NEW: State variables for dynamic payment calculation ---
  const trekPrice = 1299; // Base price for the trek
  const [isPayingHalf, setIsPayingHalf] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(trekPrice);
  const [couponMessage, setCouponMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    altMobile: '',
    email: '',
    dob: '',
    address: '',
    trekChoice: '', 
    pickupLocation: '',
    termsAccepted: false,
    contactConsent: false,
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (typeof trek === 'string') {
      const formattedName = formatTrekName(trek);
      setFormData(prevData => ({ ...prevData, trekChoice: formattedName }));
    }
  }, [trek]);

  // --- NEW: useEffect to recalculate the final amount whenever options change ---
  useEffect(() => {
    let amount = trekPrice - discount;
    if (amount < 0) amount = 0; // Ensure amount doesn't go below zero

    if (isPayingHalf) {
      setFinalAmount(amount / 2);
    } else {
      setFinalAmount(amount);
    }
  }, [isPayingHalf, discount]);


  // --- NEW: Function to handle coupon code application ---
  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === 'special100') {
      setDiscount(100);
      setCouponMessage({ type: 'success', text: 'Coupon "special100" applied! You get ₹100 off.' });
    } else {
      setDiscount(0);
      setCouponMessage({ type: 'danger', text: 'Invalid coupon code.' });
    }
  };

  const validateStep1 = () => {
    let formErrors: { [key: string]: string } = {};
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.mobile) formErrors.mobile = 'Mobile Number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) formErrors.mobile = 'Mobile Number must be 10 digits';
    if (!formData.dob) formErrors.dob = 'Date of Birth is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.pickupLocation) formErrors.pickupLocation = 'Please select a pickup location';
    if (!formData.termsAccepted) formErrors.termsAccepted = 'You must accept the terms and conditions';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, paymentScreenshot: 'Please upload a valid image file.' }));
        return;
      }
      setPaymentScreenshot(file);
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.paymentScreenshot;
        return newErrors;
      });
    }
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentScreenshot) {
      setErrors(prev => ({...prev, paymentScreenshot: 'Payment screenshot is required.'}));
      return;
    }
    if (!trek || typeof trek !== 'string') {
        alert("ERROR: Trek ID not found. Please refresh and try again.");
        return;
    }
    setIsSubmitting(true);
    try {
      const filePath = `registrations/${trek}/${Date.now()}_${paymentScreenshot.name}`;
      const storageRef = ref(storage, filePath);
      const uploadResult = await uploadBytes(storageRef, paymentScreenshot);
      const screenshotURL = await getDownloadURL(uploadResult.ref);
      const registrationsCollectionRef = collection(db, 'trip', trek, 'deatils');
      await addDoc(registrationsCollectionRef, {
        ...formData,
        finalAmountPaid: finalAmount,
        couponApplied: couponCode,
        discountGiven: discount,
        paymentScreenshotURL: screenshotURL,
        submittedAt: serverTimestamp()
      });
      alert(`Registration for ${formData.trekChoice} successful!`);
      router.push(`/discover/${trek}`);
    } catch (error) {
      console.error("Error submitting registration: ", error);
      alert('Failed to submit registration. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pickupLocations = ["Virar", "Panvel", "Nalasopara", "Thane", "Kalyan"];

  const payeeVPA = "aryansawant307@okhdfcbank"; 
  const payeeName = "Aryan Sawant";   
  const transactionNote = `Payment for ${formData.trekChoice}`;


  
  // UPI URL now uses the finalAmount from state, ensuring it's always up-to-date
  const upiUrl = `upi://pay?pa=${payeeVPA}&pn=${encodeURIComponent(payeeName)}&am=${finalAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

  return (
    <div className="container mt-5 mb-5 shadow p-4 rounded bg-light">
      <h1 className="mb-4 text-center">
        ⛰️ Register for {formData.trekChoice || 'Trek'}
      </h1>
      <form onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <>
            <h3 className="mb-3 border-bottom pb-2">Personal Information</h3>
            <div className="row g-3">
              <div className="col-md-12"><label htmlFor="fullName" className="form-label">Full Name</label><input type="text" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />{errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}</div>
              <div className="col-md-6"><label htmlFor="mobile" className="form-label">Mobile Number</label><input type="tel" className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />{errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}</div>
              <div className="col-md-6"><label htmlFor="altMobile" className="form-label">Alternative Mobile (Optional)</label><input type="tel" className="form-control" id="altMobile" name="altMobile" value={formData.altMobile} onChange={handleChange} /></div>
              <div className="col-md-6"><label htmlFor="email" className="form-label">Email Address (Optional)</label><input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} /></div>
              <div className="col-md-6"><label htmlFor="dob" className="form-label">Date of Birth</label><input type="date" className={`form-control ${errors.dob ? 'is-invalid' : ''}`} id="dob" name="dob" value={formData.dob} onChange={handleChange} required />{errors.dob && <div className="invalid-feedback">{errors.dob}</div>}</div>
              <div className="col-12"><label htmlFor="address" className="form-label">Full Address</label><textarea className={`form-control ${errors.address ? 'is-invalid' : ''}`} id="address" name="address" rows={3} value={formData.address} onChange={handleChange} required></textarea>{errors.address && <div className="invalid-feedback">{errors.address}</div>}</div>
            </div>
            <h3 className="mt-4 mb-3 border-bottom pb-2">Trek Details</h3>
            <div className="row g-3">
              <div className="col-md-6"><label htmlFor="trekChoice" className="form-label">Selected Trek</label><input type="text" className="form-control" id="trekChoice" name="trekChoice" value={formData.trekChoice} readOnly disabled /></div>
              <div className="col-md-6"><label htmlFor="pickupLocation" className="form-label">Select Pickup Location</label><select className={`form-select ${errors.pickupLocation ? 'is-invalid' : ''}`} id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required><option value="" disabled>Choose...</option>{pickupLocations.map(location => (<option key={location} value={location}>{location}</option>))}</select>{errors.pickupLocation && <div className="invalid-feedback">{errors.pickupLocation}</div>}</div>
            </div>
            <div className="mt-4">
              <div className="form-check"><input type="checkbox" className="form-check-input" id="contactConsent" name="contactConsent" checked={formData.contactConsent} onChange={handleChange} /><label className="form-check-label" htmlFor="contactConsent">Yes, I would like to receive updates about future treks and offers.</label></div>
              <div className="form-check mt-2"><input type="checkbox" className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`} id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required /><label className="form-check-label" htmlFor="termsAccepted">I have read and accept the{' '}<a href="#!" onClick={(e) => { e.preventDefault(); setShowTerms(!showTerms); }}>terms and conditions</a>.</label>{errors.termsAccepted && <div className="invalid-feedback d-block">{errors.termsAccepted}</div>}</div>
              {showTerms && (<div className="border p-3 mt-3 bg-white rounded" style={{maxHeight: '200px', overflowY: 'auto'}}><h5 className="text-center">Terms and Conditions</h5><p><strong>Last updated: July 26, 2025</strong></p><p>Please read these terms and conditions carefully before registering for a trek.</p><h6>1. Booking and Payment</h6><p>A 50% advance payment is required to confirm your slot. The remaining balance must be paid 15 days prior to the trek start date.</p><h6>2. Cancellation Policy</h6><p>Cancellations made more than 30 days before the trek will receive a 50% credit for a future trek. Cancellations made within 30 days are non-refundable.</p><h6>3. Physical Fitness</h6><p>You are responsible for ensuring you are physically fit for the chosen trek. You must declare any medical conditions at the time of booking.</p><h6>4. Code of Conduct</h6><p>All participants are expected to behave in a manner that is respectful to the local culture, environment, and other trekkers.</p><h6>5. Assumption of Risk and Liability Waiver</h6><p>You acknowledge that trekking involves inherent risks, including but not limited to, risk of injury, illness, property damage, and other dangers associated with adventure activities. By participating, you voluntarily assume all risks and agree to release and hold harmless our company, its employees, and its guides from any and all claims or liabilities for any accident, injury, or loss sustained during the trek.</p></div>)}
            </div>
            <button type="button" className="btn btn-primary w-100 mt-4" onClick={handleNextStep}>
              Proceed to Payment
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="mb-3 border-bottom pb-2">Payment Details</h3>
            <div className="p-3 border rounded bg-white">
              {/* --- NEW: Coupon and 50% payment options --- */}
              <div className="mb-3">
                <label htmlFor="couponCode" className="form-label">Coupon Code</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="couponCode" placeholder="Enter coupon" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                  <button className="btn btn-outline-secondary" type="button" onClick={handleApplyCoupon}>Apply</button>
                </div>
                {couponMessage.text && <div className={`mt-2 small text-${couponMessage.type}`}>{couponMessage.text}</div>}
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="payHalf" checked={isPayingHalf} onChange={(e) => setIsPayingHalf(e.target.checked)} />
                <label className="form-check-label" htmlFor="payHalf">
                  Pay 50% Advance Now
                </label>
              </div>
              <hr />

              {/* --- NEW: Dynamic amount calculation display --- */}
              <div className="text-center">
                <p className="text-muted mb-0">Base Amount: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(trekPrice)}</p>
                {discount > 0 && <p className="text-success mb-0">Discount: - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(discount)}</p>}
                <p className="lead fw-bold mt-2">Final Amount to Pay: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(finalAmount)}</p>
              </div>

              <div className="text-center mt-3">
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                  <a href={upiUrl} className="btn btn-sm btn-primary"><i className="bi bi-phone-fill me-1"></i>Pay with UPI App</a>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="paymentScreenshot" className="form-label fw-bold">Upload Payment Screenshot</label>
              <input type="file" className={`form-control ${errors.paymentScreenshot ? 'is-invalid' : ''}`} id="paymentScreenshot" name="paymentScreenshot" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" required />
              {errors.paymentScreenshot && <div className="invalid-feedback">{errors.paymentScreenshot}</div>}
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>&larr; Go Back</button>
              <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                {isSubmitting ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span className="ms-2">Submitting...</span></>) : 'Submit Registration'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}