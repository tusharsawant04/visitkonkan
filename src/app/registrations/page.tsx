"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { collection, getDocs, Timestamp, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Container, Nav, Table, Spinner, Alert, Button } from 'react-bootstrap';

import { db, auth } from '../../backend/lib/firebase'; // Adjust path as needed
import ProtectedRoute from '../../components/ProtectedRoute'; // Adjust path as needed
import Layout from '../../components/layout'; // Adjust path as needed

// Define TypeScript types for our data
interface Registration {
    id: string;
    fullName: string;
    mobile: string;
    pickupLocation: string;
    dob: string;
    submittedAt?: Timestamp;
    // optional fields added for displaying image & food preference
    photoUrl?: string;
    screenshotUrl?: string;
    cloudinaryPublicId?: string;
    paymentScreenshotPublicId?: string;
    foodPreference?: string;
    finalAmountPaid?: number;   // amount already paid
    totalFee?: number;          // expected total fee for this registration (if stored)
    [key: string]: any;
}

interface Trek {
    id: string; // e.g., 'naneghat-trek'
    name: string; // e.g., 'Naneghat Trek'
}

// Helper function to format slug into a readable name
const formatTrekName = (slug: string): string => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function RegistrationsPage() {
    const router = useRouter();
    const [treks, setTreks] = useState<Trek[]>([]);
    const [activeTrekId, setActiveTrekId] = useState<string | null>(null);
    const [registrations, setRegistrations] = useState<Record<string, Registration[]>>({});
    const [loadingTreks, setLoadingTreks] = useState<boolean>(true);
    const [loadingRegistrations, setLoadingRegistrations] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // State for error messages

    // Effect 1: Fetch the list of all treks for the tabs
    useEffect(() => {
        const fetchTreks = async () => {
            setLoadingTreks(true);
            setError(null);
            try {
                const tripCollectionRef = collection(db, 'trip');
                const querySnapshot = await getDocs(tripCollectionRef);
                
                const fetchedTreks: Trek[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    name: formatTrekName(doc.id)
                }));
                console.log("Fetched Treks:", fetchedTreks); // Debugging line

                setTreks(fetchedTreks);
                if (fetchedTreks.length > 0) {
                    setActiveTrekId(fetchedTreks[0].id);
                }
            } catch (err) {
                console.error("Error fetching treks: ", err);
                setError("Failed to load trek data. Please check your connection and Firestore rules.");
            } finally {
                setLoadingTreks(false);
            }
        };

        fetchTreks();
    }, []);

    // Effect 2: Fetch registrations for the active trek
    useEffect(() => {
        if (!activeTrekId || registrations[activeTrekId]) return;

        const fetchRegistrationsForTrek = async () => {
            setLoadingRegistrations(true);
            setError(null);
            try {
                // CORRECTED: 'deatils' changed to 'details'
                const detailsSubcollectionRef = collection(db, 'trip', activeTrekId, 'deatils');
                const querySnapshot = await getDocs(detailsSubcollectionRef);

                const fetchedData: Registration[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Registration));

                setRegistrations(prev => ({ ...prev, [activeTrekId]: fetchedData }));
            } catch (err) {
                console.error(`Error fetching registrations for ${activeTrekId}: `, err);
                setError("Failed to load registration details for this trek.");
            } finally {
                setLoadingRegistrations(false);
            }
        };

        fetchRegistrationsForTrek();
    }, [activeTrekId, registrations]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const defaultTrekFee = 1400; // fallback expected fee per participant

    // Add admin action to mark remaining/partial paid
    const handleMarkPaid = async (reg: Registration) => {
        if (!activeTrekId) return;
        const expected = reg.totalFee ?? reg.amountExpected ?? defaultTrekFee;
        const paid = reg.finalAmountPaid ?? 0;
        const remaining = Math.max(0, expected - paid);

        if (remaining <= 0) {
            alert('Already fully paid.');
            return;
        }

        const input = prompt(`Remaining for ${reg.fullName || 'participant'}: ₹${remaining}\nEnter amount to mark as paid (leave empty to mark full):`, String(remaining));
        if (input === null) return; // cancelled

        const amt = input.trim() === '' ? remaining : Number(input);
        if (isNaN(amt) || amt <= 0) {
            alert('Invalid amount entered.');
            return;
        }

        try {
            const docRef = doc(db, 'trip', activeTrekId, 'deatils', reg.id); // keep same subcollection used earlier
            await updateDoc(docRef, {
                finalAmountPaid: (reg.finalAmountPaid ?? 0) + amt,
                lastPaymentAt: serverTimestamp(),
            });

            // Optimistically update UI
            setRegistrations(prev => {
                const list = prev[activeTrekId]?.map(r => r.id === reg.id ? { ...r, finalAmountPaid: (r.finalAmountPaid ?? 0) + amt } : r) || [];
                return { ...prev, [activeTrekId]: list };
            });
        } catch (err) {
            console.error('Mark paid failed', err);
            alert('Failed to update payment. Check console for details.');
        }
    };

    // Add admin action to adjust/set total paid (in case wrong entry)
    const handleAdjustPaid = async (reg: Registration) => {
        if (!activeTrekId) return;
        const expected = reg.totalFee ?? reg.amountExpected ?? defaultTrekFee;
        const currentPaid = reg.finalAmountPaid ?? 0;

        const input = prompt(
            `Adjust payment for ${reg.fullName || 'participant'}\nCurrent paid: ₹${currentPaid}\nEnter new total amount paid (numeric):`,
            String(currentPaid)
        );
        if (input === null) return; // cancelled

        const newPaid = Number(input.trim());
        if (isNaN(newPaid) || newPaid < 0) {
            alert('Invalid amount entered. Please enter a non-negative number.');
            return;
        }

        try {
            const docRef = doc(db, 'trip', activeTrekId, 'deatils', reg.id);
            await updateDoc(docRef, {
                finalAmountPaid: newPaid,
                lastPaymentAt: serverTimestamp(),
            });

            // Optimistic UI update
            setRegistrations(prev => {
                const list = prev[activeTrekId]?.map(r => r.id === reg.id ? { ...r, finalAmountPaid: newPaid } : r) || [];
                return { ...prev, [activeTrekId]: list };
            });
        } catch (err) {
            console.error('Adjust paid failed', err);
            alert('Failed to update payment. Check console for details.');
        }
    };

    const currentRegistrations = activeTrekId ? (registrations[activeTrekId] ?? []) : [];

    // Totals calculation (extended to include expected revenue & discounts)
    const totals = (currentRegistrations ?? []).reduce((acc, r) => {
        const expected = r.totalFee ?? r.amountExpected ?? defaultTrekFee;
        const paid = r.finalAmountPaid ?? 0;
        const discount = r.discountGiven ?? r.discount ?? 0;

        acc.totalCollected += paid;
        acc.totalRemaining += Math.max(0, expected - paid);
        acc.totalExpected += expected;
        acc.totalDiscount += discount;
        acc.count += 1;
        return acc;
    }, { totalCollected: 0, totalRemaining: 0, totalExpected: 0, totalDiscount: 0, count: 0 });

    // netRevenue is what has actually been collected (you can change definition if needed)
    const netRevenue = totals.totalCollected;

    return (
        <Layout>
            <ProtectedRoute>
                <Container className="mt-5 mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>Trek Registrations</h1>
                        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                    </div>

                    {/* Display a global error message if something fails */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {loadingTreks ? (
                        <div className="text-center p-5"><Spinner animation="border" /></div>
                    ) : treks.length === 0 && !error ? ( // Only show if no other error
                        <Alert variant="info">No treks with registrations found.</Alert>
                    ) : (
                        <>
                            <Nav variant="tabs" activeKey={activeTrekId || ''} onSelect={(k) => k && setActiveTrekId(k)}>
                                {treks.map(trek => (
                                    <Nav.Item key={trek.id}>
                                        <Nav.Link eventKey={trek.id}>{trek.name}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            <div className="tab-content mt-3">
                            {loadingRegistrations ? (
                                <div className="text-center p-5"><Spinner animation="border" /></div>
                            ) : currentRegistrations && currentRegistrations.length > 0 ? (
                                <>
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Photo</th>
                                            <th>Full Name</th>
                                            <th>Mobile</th>
                                            <th>Pickup Location</th>
                                            <th>Date of Birth</th>
                                            <th>Submitted At</th>
                                            <th>Food Preference</th>
                                            <th>Amount paid</th>
                                            <th>Remaining</th>    {/* new column */}
                                            <th>Action</th>       {/* new column for admin marking */}
                                            <th>Discounted amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentRegistrations.map((reg, index) => {
                                            const expected = reg.totalFee ?? reg.amountExpected ?? defaultTrekFee;
                                            const paid = reg.finalAmountPaid ?? 0;
                                            const remaining = Math.max(0, expected - paid);

                                            return (
                                                <tr key={reg.id}>
                                                    <td>{index + 1}</td>

                                                    <td style={{ width: 140 }}>
                                                        {(() => {
                                                            const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
                                                            const directUrl = reg.photoUrl || reg.screenshotUrl || reg.paymentScreenshotUrl;
                                                            const publicId = reg.cloudinaryPublicId || reg.paymentScreenshotPublicId;
                                                            const src = directUrl
                                                                || (publicId && cloudName ? `https://res.cloudinary.com/${cloudName}/image/upload/w_140,h_90,c_fill/${publicId}` : '/placeholder.jpg');
                                                            return (
                                                                <img
                                                                    src={src}
                                                                    alt={`${reg.fullName || 'participant'} photo`}
                                                                    style={{ width: 140, height: 90, objectFit: 'cover', borderRadius: 6 }}
                                                                />
                                                            );
                                                        })()}
                                                    </td>

                                                    <td>{reg.fullName}</td>
                                                    <td>{reg.mobile}</td>
                                                    <td>{reg.pickupLocation}</td>
                                                    <td>{reg.dob}</td>
                                                    <td>
                                                        {reg.submittedAt 
                                                            ? reg.submittedAt.toDate().toLocaleString('en-IN')
                                                            : 'N/A'
                                                        }
                                                    </td>

                                                    <td>{reg.foodPreference ?? reg.food_preference ?? 'Not specified'}</td>

                                                    <td>₹{paid}</td>
                                                    <td style={{ color: remaining > 0 ? '#d9534f' : '#28a745' }}>₹{remaining}</td>
                                                    <td>
                                                        <Button size="sm" variant="outline-primary" onClick={() => handleMarkPaid(reg)} className="me-2">Mark Paid</Button>
                                                        <Button size="sm" variant="outline-secondary" onClick={() => handleAdjustPaid(reg)}>Adjust</Button>
                                                    </td>

                                                     <td>₹{reg.discountGiven ?? 0}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>

                                {/* Totals summary */}
                                <div className="d-flex flex-column gap-2 mt-3 p-3 border rounded">
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Total registrations:</strong></div>
                                        <div>{totals.count}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Total expected (if all paid):</strong></div>
                                        <div>₹{totals.totalExpected}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Total collected (revenue):</strong></div>
                                        <div>₹{totals.totalCollected}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Total discount given:</strong></div>
                                        <div>₹{totals.totalDiscount}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Total remaining:</strong></div>
                                        <div style={{ color: totals.totalRemaining > 0 ? '#d9534f' : '#28a745' }}>₹{totals.totalRemaining}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div><strong>Net revenue:</strong></div>
                                        <div>₹{netRevenue}</div>
                                    </div>
                                </div>
                                </>
                            ) : (
                                <Alert variant="secondary">No registrations found for this trek.</Alert>
                            )}
                            </div>
                        </>
                    )}
                </Container>
            </ProtectedRoute>
        </Layout>
    );
}