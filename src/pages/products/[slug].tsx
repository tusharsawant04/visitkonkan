// pages/product/[slug].tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";
import React from "react";

interface ProductSpecifications {
  weight: string;
  origin: string;
  shelfLife: string;
  ingredients: string;
}

interface RelatedProduct {
  id: string;
  slug: string;
  title: string;
  priceINR: number;
  image: string;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  priceINR: number;
  currency: string;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  description: string;
  specifications: ProductSpecifications;
  images: string[];
  related: RelatedProduct[];
}

async function fetchProductBySlug(slug: string): Promise<Product> {
  return {
    id: "kokum-syrup",
    slug: "kokum-syrup",
    title: "Organic Kokum Syrup",
    priceINR: 250,
    currency: "₹",
    rating: 4.3,
    reviewCount: 120,
    shortDescription:
      "A tangy, delicious syrup made from organic kokum fruit. Perfect for refreshing drinks and culinary uses.",
    description:
      "Organic Kokum Syrup is made from ripe sun-dried kokum fruit and a small amount of sugar. It has a tangy, slightly sweet flavour that brightens drinks, mocktails, desserts and more. Ingredients: Kokum, sugar, water. Store in a cool, dry place. Refrigerate after opening.",
    specifications: {
      weight: "500 ml",
      origin: "Ratnagiri, Konkan",
      shelfLife: "12 months",
      ingredients: "Kokum, Sugar, Water",
    },
    images: [
      "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
    ],
    related: [
      {
        id: "cashews",
        slug: "cashews",
        title: "Cashews (Roasted)",
        priceINR: 699,
        image: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      },
      {
        id: "mango-pickle",
        slug: "mango-pickle",
        title: "Mango Pickle",
        priceINR: 249,
        image: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      },
      {
        id: "coconut-oil",
        slug: "coconut-oil",
        title: "Cold-pressed Coconut Oil",
        priceINR: 399,
        image: "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd",
      },
    ],
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const product = await fetchProductBySlug(slug || "kokum-syrup");
  return { props: { product } };
};

export default function ProductPage({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<string>(
    product.images?.[0] ??
      "https://drive.google.com/uc?export=view&id=1ZfA4KvcAryrcw62SvJD0jov-bGQhwVcd"
  );
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs">(
    "description"
  );
  const [wishlist, setWishlist] = useState<boolean>(false);

  const increment = () => setQty((q) => q + 1);
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    alert(`${product.title} — ${qty} added to cart (demo)`);
  };

  const handleWishlist = () => setWishlist((prev) => !prev);

  return (
    <Layout>
      <div className="container my-5">
        <div className="row g-4">
          {/* Left: Gallery */}
          <div className="col-lg-6">
            <div className="card shadow-sm rounded-4">
              <div className="card-body text-center p-3">
                <Image
                  src={selectedImage}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
            <div className="d-flex gap-2 mt-3">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-3 p-1 ${
                    selectedImage === img
                      ? "border-primary shadow-sm"
                      : "border-secondary"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={80}
                    height={80}
                    className="img-fluid rounded-3"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="col-lg-6">
            <h1 className="fw-bold mb-2">{product.title}</h1>
            <p className="text-muted mb-3">{product.shortDescription}</p>

            <div className="d-flex align-items-center mb-3">
              <StarRating value={product.rating} />
              <small className="text-muted ms-2">
                {product.rating} · {product.reviewCount} reviews
              </small>
            </div>

            <div className="card p-3 mb-4 shadow-sm rounded-4">
              <h2 className="h4 fw-bold">
                {product.currency}
                {product.priceINR}
              </h2>
              <small className="text-muted d-block mb-3">
                Inclusive of all taxes
              </small>

              <div className="d-flex align-items-center gap-2 mb-3">
                <button
                  className="btn btn-outline-secondary rounded-circle px-3"
                  onClick={decrement}
                >
                  −
                </button>
                <span className="px-3 fw-bold">{qty}</span>
                <button
                  className="btn btn-outline-secondary rounded-circle px-3"
                  onClick={increment}
                >
                  +
                </button>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-primary flex-grow-1 shadow-sm rounded-4"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className={`btn ${
                    wishlist ? "btn-danger" : "btn-outline-secondary"
                  } shadow-sm rounded-4`}
                  onClick={handleWishlist}
                >
                  <HeartIcon filled={wishlist} />
                </button>
              </div>

              <small className="d-block mt-2 text-muted">
                Free shipping across Konkan · Delivery in 3–5 days
              </small>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-3 border-0">
              {["description", "specs"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link rounded-top ${
                      activeTab === tab ? "active fw-bold" : ""
                    }`}
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab === "description" ? "Description" : "Specifications"}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content p-3 border rounded-4 shadow-sm">
              {activeTab === "description" && <p>{product.description}</p>}

              {activeTab === "specs" && (
                <dl className="row">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <dt className="col-sm-4 fw-semibold">
                        {key.replace(/([A-Z])/g, " $1")}
                      </dt>
                      <dd className="col-sm-8">{value}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h2 className="fw-bold mt-5 mb-3">You might also like</h2>
        <div className="d-flex overflow-auto gap-3 pb-2">
          {product.related.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}`}
              className="text-decoration-none"
            >
              <div
                className="card shadow-sm rounded-4"
                style={{ minWidth: "220px", cursor: "pointer" }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={220}
                  height={160}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body p-2">
                  <h5 className="card-title mb-1" style={{ fontSize: "0.9rem" }}>
                    {p.title}
                  </h5>
                  <p className="text-muted mb-0">
                    {product.currency}
                    {p.priceINR}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function StarRating({ value }: { value: number }) {
  return (
    <div className="d-flex">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((s) => (
        <svg
          key={s}
          className={`me-1 ${value >= s ? "text-warning" : "text-secondary"}`}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={value >= s ? "currentColor" : "none"}
          stroke={value >= s ? "none" : "currentColor"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.287 3.965c.3.922-.755 1.688-1.54 1.118l-3.383-2.46a1 1 0 00-1.176 0l-3.383 2.46c-.784.57-1.838-.196-1.539-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return filled ? (
    <svg
      className="bi bi-heart-fill"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 2.748-.717-.737C5.6.281 8 4.6 8 4.6s2.4-4.319 6.717-5.338C15.12.01 16.071 2.114 14.857 3.9L8 10.548 1.143 3.9C-.071 2.114.879.01 3.283 2.748z" />
    </svg>
  ) : (
    <svg
      className="bi bi-heart"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 2.748-.717-.737C5.6.281 8 4.6 8 4.6s2.4-4.319 6.717-5.338C15.12.01 16.071 2.114 14.857 3.9L8 10.548 1.143 3.9C-.071 2.114.879.01 3.283 2.748z"
        strokeWidth="1.5"
      />
    </svg>
  );
}
