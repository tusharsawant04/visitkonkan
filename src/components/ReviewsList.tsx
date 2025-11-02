"use client";
import { useEffect, useState } from "react";
import { db } from "../backend/lib/firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { Star } from "lucide-react";

interface Review {
  id: string;
  slug: string; // 👈 add this
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function ReviewsList({ slug }: { slug: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    if (!slug) return;
    console.log(slug)
    
    const q = query(
      collection(db, "reviews"),
    
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Review));
  const filteredData = data.filter(review => review.slug === slug); 
      setReviews(filteredData);
    });
    return unsubscribe;
  }, [slug]);

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 mt-4">
      <h2 className="h5 fw-semibold mb-3">Traveler Reviews</h2>

      {reviews.length === 0 && (
        <p className="text-muted small mb-0">
          No reviews yet for this experience. Be the first to share your thoughts!
        </p>
      )}

      {visibleReviews.map((r) => (
        <div key={r.id} className="border rounded-3 p-3 mb-3 bg-light">
          <div className="d-flex align-items-center mb-2">
            <div
              className="rounded-circle bg-secondary text-white fw-bold d-flex align-items-center justify-content-center me-2"
              style={{ width: 36, height: 36 }}
            >
              {r.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="fw-semibold">{r.name}</div>
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill={star <= r.rating ? "#facc15" : "none"}
                    stroke={star <= r.rating ? "#facc15" : "#d1d5db"}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-muted mb-0 fst-italic">{r.comment}</p>
        </div>
      ))}

      {reviews.length > visibleCount && (
        <div className="text-center mt-2">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
