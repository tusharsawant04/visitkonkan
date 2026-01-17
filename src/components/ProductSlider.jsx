"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Konkan Mango Pickle",
      price: "₹250",
      img: "https://drive.google.com/uc?export=view&id=1p5Tv_BSnwAv0ovX-F-vX9IR3TtcUSr7K",
      tagline: "Authentic Konkan Flavor",
    },
    {
      id: 5,
      name: "Kokum Syrup",
      price: "₹300",
      img: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      tagline: "Refreshing Coastal Delight",
    },
    {
      id: 4,
      name: "Konkan Cashews",
      price: "₹600",
      img: "https://drive.google.com/uc?export=view&id=1ebZ-UUvJwewMcDBqZHaAtfLNijIViiko",
      tagline: "Crunchy & Premium Quality",
    },
  ];

  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  const slides = chunkArray(products, 3);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-2 product-title">
        Discover Premium Konkan Products
      </h2>
      <p className="text-muted mb-5 product-subtitle">
        Handpicked treasures from the heart of Konkan
      </p>

      {/* Desktop */}
      <div id="productSliderDesktop" className="carousel slide d-none d-md-block">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                {slide.map((product) => (
                  <div key={product.id} className="col-md-4 d-flex justify-content-center">
                    <div className="product-card">
                      <div className="product-img-wrapper">
                        <Image
                          src={product.img}
                          alt={product.name}
                          width={400}
                          height={280}
                          className="product-img"
                        />
                      </div>

                      <div className="product-body text-center">
                        <h5 className="fw-semibold">{product.name}</h5>
                        <p className="product-tagline">{product.tagline}</p>
                        <p className="product-price">{product.price}</p>

                        <div className="d-flex gap-2 justify-content-center">
                          <button className="btn btn-upcoming" disabled>
                            Coming Soon
                          </button>
                          <a href="/products/kokum-syrup" className="btn btn-view">
                            View Product
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

        <button className="carousel-control-prev" data-bs-target="#productSliderDesktop" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" data-bs-target="#productSliderDesktop" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* Mobile */}
      <div id="productSliderMobile" className="carousel slide d-md-none">
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div key={product.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex justify-content-center py-3">
                <div className="product-card">
                  <div className="product-img-wrapper">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={400}
                      height={280}
                      className="product-img"
                    />
                  </div>

                  <div className="product-body text-center">
                    <h5 className="fw-semibold">{product.name}</h5>
                    <p className="product-tagline">{product.tagline}</p>
                    <p className="product-price">{product.price}</p>

                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-upcoming" disabled>
                        Coming Soon
                      </button>
                      <a href="/products/kokum-syrup" className="btn btn-view">
                        View Product
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Styles */}
      <style jsx global>{`
        .product-title {
          font-size: 2.2rem;
        }

        .product-subtitle {
          font-size: 1rem;
        }

        .product-card {
          width: 22rem;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff, #f8fafc);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
        }

        .product-img-wrapper {
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        .product-body {
          padding: 1.5rem;
        }

        .product-tagline {
          font-size: 0.9rem;
          color: #6b7280;
          font-style: italic;
        }

        .product-price {
          font-weight: 700;
          font-size: 1.1rem;
          color: #475569;
          margin-bottom: 1rem;
        }

        .btn-upcoming {
          background: #9ca3af;
          color: #fff;
          border-radius: 999px;
          padding: 8px 18px;
          border: none;
          cursor: not-allowed;
        }

        .btn-view {
          border-radius: 999px;
          padding: 8px 18px;
          border: 1px solid #64748b;
          color: #475569;
          font-weight: 600;
        }

        .btn-view:hover {
          background: #475569;
          color: #fff;
        }

        .carousel-control-prev,
        .carousel-control-next {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
