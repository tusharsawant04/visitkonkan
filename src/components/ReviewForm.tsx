"use client";
import { useState } from "react";
import { db } from "../backend/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Star } from "lucide-react";

export default function ReviewForm({ slug }: { slug: string }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug) return alert("Invalid experience identifier.");

    setLoading(true);
    setSuccessMsg("");
    try {
      await addDoc(collection(db, "reviews"), {
        slug, // 🔗 link to specific experience
        name,
        rating,
        comment,
        createdAt: serverTimestamp(),
      });

      setSuccessMsg("✅ Thanks for your review!");
      setName("");
      setRating(5);
      setComment("");
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Something went wrong while submitting your review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card border-0 shadow-sm rounded-4 p-4 mt-4 bg-light"
    >
      <h3 className="h6 fw-semibold mb-3 text-dark">Write Your Review</h3>

      {/* Success Message */}
      {successMsg && (
        <div className="alert alert-success py-2" role="alert">
          {successMsg}
        </div>
      )}

      {/* Name */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-control"
        />
      </div>

      {/* Rating */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Rating</label>
        <div className="d-flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              fill={star <= rating ? "#facc15" : "none"}
              stroke="#facc15"
              onClick={() => setRating(star)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Your Review</label>
        <textarea
          placeholder="Share your experience..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={3}
          className="form-control"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary px-4"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
