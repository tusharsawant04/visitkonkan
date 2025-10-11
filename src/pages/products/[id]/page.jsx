"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../../../components/layout';

// Sample products
const products = [
  {
    id: "1",
    name: "Konkan Mango Pickle",
    price: "₹250",
    img: "/images/mango-pickle.jpg",
    tagline: "Taste the Authentic Konkan Flavor!",
    desc: "Made with fresh mangoes and traditional Konkan spices. Perfect for your daily meals.",
  },
  {
    id: "2",
    name: "Handcrafted Wooden Boat",
    price: "₹1200",
    img: "/images/wooden-boat.jpg",
    tagline: "Bring Handmade Art to Your Home",
    desc: "Beautifully handcrafted wooden boat model for decoration and gifting purposes.",
  },
 
  {
    id: "4",
    name: "Konkan Cashews",
    price: "₹600",
    img: "/images/cashews.jpg",
    tagline: "Crunchy & Premium Quality Nuts",
    desc: "Premium quality cashews sourced directly from Konkan, healthy and delicious.",
  },
];

// Sample location data
const states = ["Maharashtra", "Karnataka"];
const districtsData = {
  Maharashtra: ["Ratnagiri", "Sindhudurg", "Raigad"],
  Karnataka: ["Bengaluru", "Mysuru"],
};
const talukasData = {
  Ratnagiri: ["Chiplun", "Sangameshwar"],
  Sindhudurg: ["Sawantwadi", "Vengurla"],
  Raigad: ["Alibag", "Mangaon"],
  Bengaluru: ["Bengaluru North", "Bengaluru South"],
  Mysuru: ["Hunsur", "Nanjangud"],
};

const ProductPage = () => {
  const { id } = useParams() || {};
  const router = useRouter();
  const product = products.find((p) => p.id === id);

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [customerName, setCustomerName] = useState("");
  const [address1, setAddress1] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [pincode, setPincode] = useState("");

  if (!product) return <p className="text-center mt-5">Product not found!</p>;

  const handleOrder = () => {
    if (!customerName || !address1 || !state || !district || !taluka || !pincode) {
      alert("Please fill all fields!");
      return;
    }

    const total = parseInt(product.price.slice(1)) * quantity;
    alert(`✅ Order Confirmed!
    
Product: ${product.name}
Quantity: ${quantity}
Total: ₹${total}
Name: ${customerName}
Address: ${address1}, ${state}, ${district}, ${taluka} - ${pincode}`);

    setShowModal(false);
    setQuantity(1);
    setCustomerName("");
    setAddress1("");
    setState("");
    setDistrict("");
    setTaluka("");
    setPincode("");
  };

  return (
    <Layout>
      <div className="container my-5">
        <button className="btn btn-outline-secondary mb-4" onClick={() => router.back()}>
          &larr; Back
        </button>

        <div className="row align-items-center shadow-lg p-4 rounded-4" style={{ background: "#f8f9fa" }}>
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid rounded-4"
              style={{ maxHeight: "400px", objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">{product.name}</h2>
            <p className="text-primary fw-semibold mb-3" style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
              {product.tagline}
            </p>
            <h4 className="text-success fw-bold mb-3">{product.price}</h4>
            <p className="mb-4" style={{ lineHeight: "1.7", color: "#555" }}>{product.desc}</p>

            {/* Quantity + Buy */}
            <div className="d-flex gap-3 align-items-center mb-3">
              <label className="fw-semibold">Quantity:</label>
              <input
                type="number"
                className="form-control"
                style={{ width: "80px" }}
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>

            <button
              className="btn text-white fw-semibold px-4 py-2"
              style={{
                background: "linear-gradient(90deg, #1CA9C9, #1591B9)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              onClick={() => setShowModal(true)}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Checkout Modal */}
        {showModal && (
          <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content rounded-4 p-4">
                <div className="modal-header">
                  <h5 className="modal-title">Checkout</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Address Line 1</label>
                    <input type="text" className="form-control" placeholder="Street, House No." value={address1} onChange={(e) => setAddress1(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">State</label>
                    <select className="form-select" value={state} onChange={(e) => { setState(e.target.value); setDistrict(""); setTaluka(""); }}>
                      <option value="">Select State</option>
                      {states.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">District</label>
                    <select
                      className="form-select"
                      value={district}
                      onChange={(e) => { setDistrict(e.target.value); setTaluka(""); }}
                      disabled={!state}
                    >
                      <option value="">Select District</option>
                      {state && districtsData[state].map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Taluka</label>
                    <select
                      className="form-select"
                      value={taluka}
                      onChange={(e) => setTaluka(e.target.value)}
                      disabled={!district}
                    >
                      <option value="">Select Taluka</option>
                      {district && talukasData[district].map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Pincode</label>
                    <input type="text" className="form-control" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                  </div>

                  <p className="fw-semibold text-success">
                    Total: ₹{parseInt(product.price.slice(1)) * quantity}
                  </p>

                  <button className="btn btn-primary px-4 py-2 w-100" onClick={handleOrder}>
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default ProductPage;
