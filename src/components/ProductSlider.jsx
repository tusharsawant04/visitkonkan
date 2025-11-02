"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
const ProductSlider = () => {
  const products = [
    { id: 1, name: "Konkan Mango Pickle", price: "₹250", img: "https://drive.google.com/uc?export=view&id=1p5Tv_BSnwAv0ovX-F-vX9IR3TtcUSr7K", tagline: "Taste the Authentic Konkan Flavor!" },
     {
      id: 5,
      name: "Kokum Syrup",
      price: "₹300",
      img: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      tagline: "A Refreshing Taste of the Konkan Coast"
    },
       { id: 4, name: "Konkan Cashews", price: "₹600", img: "https://drive.google.com/uc?export=view&id=1ebZ-UUvJwewMcDBqZHaAtfLNijIViiko", tagline: "Crunchy & Premium Quality Nuts" },
  ];

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  };

  // Split products into groups of 3 for large screens
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(products, 3); // 3 cards per slide on large screens

  return (
    <div className="container my-5">

      <h2 className="fw-bold " style={{ fontWeight: 700, fontSize: "2rem" }}>
        Discover Premium Konkan Products
      </h2>
      <p className="mb-5 text-muted" style={{ fontSize: "1rem" }}>
        Handpicked treasures from the heart of Konkan, crafted with love and tradition.
      </p>

  <div id="productSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slideProducts, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                {slideProducts.map((product) => (
                  <div key={product.id} className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                    <div
                      className="card shadow-lg border-0"
                      style={{
                        width: "22rem",
                        borderRadius: "12px",
                        overflow: "hidden",
                        transition: "transform 0.3s",
                      }}
                    >
                        <Image
                        src={product.img}
                        className="card-img-top"
                        alt={product.name}
                         width={400}
                        height={300}
                      />
                      <div className="card-body d-flex flex-column align-items-center text-center">
                        <h5 className="card-title fw-bold mb-2" style={{ fontSize: "1.3rem" }}>
                          {product.name}
                        </h5>
                        <p className="text-muted mb-2" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                          {product.tagline}
                        </p>
                        <p className="card-text fw-bold text-secondary mb-3" style={{ fontSize: "1.1rem" }}>
                          ...
                        </p>
                        <div className="d-flex gap-2">
                          <button
                            className="btn fw-semibold text-white"
                            style={{
                              background: "gray",
                              borderRadius: "8px",
                              padding: "8px 20px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                              cursor: "not-allowed",
                            }}
                            disabled
                          >
                            Upcoming
                          </button>
                          <a

                            href="/products/kokum-syrup"
                            className="btn btn-outline-secondary fw-semibold"
                            style={{
                              borderRadius: "8px",
                              padding: "8px 20px",
                              cursor: "not-allowed",
                            }}
                          
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
