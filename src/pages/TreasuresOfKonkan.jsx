"use client";

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import Image from 'next/image';
const products = [
  

   { id: 1, name: "Konkan Mango Pickle",  img: "https://drive.google.com/uc?export=view&id=1p5Tv_BSnwAv0ovX-F-vX9IR3TtcUSr7K" },
     {
      id: 5,
      name: "Kokum Syrup",
      img: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
    },
       { id: 4, name: "Konkan Cashews",img: "https://drive.google.com/uc?export=view&id=1ebZ-UUvJwewMcDBqZHaAtfLNijIViiko" },

];

const TreasuresOfKonkan = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">

        {/* 🏝️ Vibrant Banner Section */}
        <div
          className="text-center text-white py-5 position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0099f7 0%, #00c6ff 100%)",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.25",
              zIndex: 0,
            }}
          ></div>

          <div className="position-relative z-1">
            <h1
              className="fw-bold display-5 mb-2"
              style={{
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
                letterSpacing: "1px",
              }}
            >
              🌴 Treasures of Konkan
            </h1>
            <p className="lead mb-0">
              Discover authentic Konkan products — handcrafted with love 💛
            </p>
            <p className="fw-semibold mt-3 bg-light text-primary px-3 py-1 d-inline-block rounded-pill shadow-sm">
              Coming Soon...
            </p>
          </div>
        </div>

        {/* 🎠 Product Carousel */}
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Image
                  src={product.img}
                  className="d-block w-100"
                  alt={product.name}
               width={400}
                        height={300}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="fw-bold">{product.name}</h4>
                  <p className="fw-semibold mb-2 text-light opacity-75">{product.price}</p>
                  <button
                    className="btn text-white shadow-lg"
                    style={{
                      background: "#1CA9C9",
                      borderRadius: "6px",
                      fontWeight: "500",
                      padding: "6px 14px",
                    }}
                  >
                    🌊 Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* 🪸 Product Grid */}
        <section className="container my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 text-primary">
              Handpicked Treasures ✨
            </h2>
            <p className="text-muted">
              From coastal crafts to flavorful delights — Konkan’s essence in every piece.
            </p>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card h-100 border-0 shadow-lg overflow-hidden position-relative"
                  style={{
                    transition: "all 0.3s ease-in-out",
                    borderRadius: "15px",
                  }}
                >
                  <Image
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                         width={400}
                        height={300}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold text-dark">
                      {product.name}
                    </h5>
                    <p className="fw-bold text-primary mb-3">...</p>
                    <button
                      className="btn text-white mt-auto shadow-sm"
                      style={{
                        background: "#1CA9C9",
                        borderRadius: "6px",
                        fontWeight: "500",
                        padding: "6px 14px",
                      }}
                    >
                      Coming Soon
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white fw-bold"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    🌊 Authentic Konkan Craft
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 🌈 CSS Animations */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-8px);
        }
        .card:hover img {
          transform: scale(1.1);
        }
        .card:hover .position-absolute {
          opacity: 1;
        }
      `}</style>
    </Layout>
  );
};

export default TreasuresOfKonkan;
