import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

const products = [
  { id: 1, name: "Konkan Mango Pickle", price: "₹250", img: "/images/mango-pickle.jpg" },
  { id: 2, name: "Handcrafted Wooden Boat", price: "₹1200", img: "/images/wooden-boat.jpg" },
  { id: 3, name: "Coconut Shell Lamp", price: "₹850", img: "/images/coconut-lamp.jpg" },
  { id: 4, name: "Konkan Cashews", price: "₹600", img: "/images/cashews.jpg" },
];

const TreasuresOfKonkan = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">

        {/* Upcoming Banner */}
        <div
          className="text-center text-white py-4"
          style={{
            background: "#1CA9C9",
            fontWeight: "600",
            letterSpacing: "1px",
            fontSize: "1.3rem",
          }}
        >
          🌴 Treasures of Konkan – Coming Soon 🌴
        </div>

        {/* Product Slider / Carousel */}
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={product.img}
                  className="d-block w-100"
                  alt={product.name}
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{product.name}</h5>
                  <p className="fw-bold">...</p>
                  <button
                    className="btn text-white"
                    style={{
                      background: "#1CA9C9",
                      borderRadius: "6px",
                      fontWeight: "500",
                      padding: "6px 12px",
                    }}
                  >
                    Upcoming
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

        {/* Product Grid */}
        <section className="container my-5">
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold">...</p>
                    <button
                      className="btn text-white mt-auto"
                      style={{
                        background: "#1CA9C9",
                        borderRadius: "6px",
                        fontWeight: "500",
                        padding: "6px 12px",
                      }}
                    >
                      Upcoming
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default TreasuresOfKonkan;
