import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { useEffect } from 'react';
import { useState } from 'react';
export interface Experience {
  name: string;
  slug: string;
  desc: string;
  rating: string;
  img: string[];
  history: string;
  itinerary: string[];
  location: string; // Google Maps embed link
  reviews: {
    name: string;
    comment: string;
    rating: number;
  }[];
}

export const experiences: Experience[] = [
 {
    name: "Rajgad Trek",
    slug: "rajgad-trek",
    desc:  "Rajgad is an enormous fort. Rajgad means King of all forts. It located south-west 60 Kms from Pune. Chhatrapati Shivaji Maharaj spent a great deal of his time on this fort close to 25 years. Rajgad is famous for its construction layout. The fort can be divided into four different parts based on geographical terrain and fortification. There are three sub-plateau Machi, namely Padmavati Machi, Suvela Machi, and Sanjevani Machi, and at the centre is the Ballekilla. Take a step into history as you take this exciting trek from Pune, visit the Padmavati temple, and the Ancient Fort ruins. Rajgad Trek is a moderate level trek that begins at the Gunjavane Village in Pune District and ends at the Rajgad Fort. Rajgad is truly the King of all forts. It is famous for its structure. Rajgad is surrounded by Sinhagad, Torna, Mangalgad, and Purandar. Popular Maharashtra trekking and weekend destination from Pune; Rajgad, lies at a distance of about 65 Km from Pune. Rajgad fort to Torna fort trekking is famous amongst advanced trekkers. Often in the hustle and bustle of our daily lives, we get so caught up with the monotony that we miss out on the little things that the world has to offer us. Ancient hill forts not only provide its visitors with ancient legends but also soothe their nerves. If you are keen to explore one of these beautiful hill forts, then it is advisable to plan a tour of Rajgad fort.",
    rating: "5.0/5",
   img: [
  "https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D",
  "https://images.unsplash.com/photo-1589644873574-345111273e9b",
  "https://images.unsplash.com/photo-1599106242383-271adeb2e828"
],    history: "Rajgad Fort, once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, was a strategic military base and residence. Its architecture and stories reflect the strength and vision of the Maratha rulers.",
    itinerary: [
      "6:00 AM: Departure from Pune",
      "9:00 AM: Base village arrival",
      "10:00 AM: Start trek",
      "1:00 PM: Reach top, explore fort",
      "2:30 PM: Lunch and rest",
      "4:00 PM: Start descent",
      "6:00 PM: Return to base village"
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.561999548417!2d73.67640917519161!3d18.592380667253108",
    reviews: [
      { name: "Paratik Gawade", comment: "Truly unforgettable experience!", rating: 5 },
      { name: "Rahul Dhayalkar", comment: "Amazing trek, great planning!", rating: 4 },
      { name: "Unknown", comment: "Loved the views and history!", rating: 5 }
    ]
  },
 {
    name: "Raigad Trek",
    slug: "raigad-trek",
    desc: "Walk the ancient paths of Shivaji Maharaj’s capital where clouds kiss the fort and history whispers through every stone.",
    rating: "5.0/5",
    img: [
    "https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D",
    "https://images.unsplash.com/photo-1589644873574-345111273e9b",
    "https://images.unsplash.com/photo-1599106242383-271adeb2e828"
  ],    
history: "Rajgad Fort, once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, was a strategic military base and residence. Its architecture and stories reflect the strength and vision of the Maratha rulers.",
    itinerary: [
      "6:00 AM: Departure from Pune",
      "9:00 AM: Base village arrival",
      "10:00 AM: Start trek",
      "1:00 PM: Reach top, explore fort",
      "2:30 PM: Lunch and rest",
      "4:00 PM: Start descent",
      "6:00 PM: Return to base village"
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.561999548417!2d73.67640917519161!3d18.592380667253108",
    reviews: [
      { name: "Paratik Gawade", comment: "Truly unforgettable experience!", rating: 5 },
      { name: "Rahul Dhayalkar", comment: "Amazing trek, great planning!", rating: 4 },
      { name: "Unknown", comment: "Loved the views and history!", rating: 5 }
    ]
  },
  // Add more
];

export default function ExperienceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const experience: Experience | undefined = experiences.find(exp => exp.slug === slug);

  const [showFullDesc, setShowFullDesc] = useState(false);
  useEffect(() => {
    // Load Bootstrap JS for modal
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  if (!experience) {
    return (
      <Layout>
        <div className="container py-5">
          <h2 className="text-danger">Experience not found</h2>
          <Link href="/" className="btn btn-outline-secondary mt-3">← Back</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
     <div id="experienceCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {experience.img.map((img, idx) => (
      <div
        key={idx}
        className={`carousel-item ${idx === 0 ? 'active' : ''}`}
        style={{ maxHeight: '500px', overflow: 'hidden' }}
      >
        <Image
          src={img}
          alt={`${experience.name} - ${idx + 1}`}
          width={1200}
          height={500}
          className="d-block w-100"
          style={{ objectFit: 'cover' }}
        />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
          <h1 className="fw-bold text-white">{experience.name}</h1>
          <p className="mb-0 text-warning">⭐ {experience.rating}</p>
        </div>
      </div>
    ))}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#experienceCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#experienceCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-md-8">
           <div className="mb-4">
            <h4 className="fw-bold">Overview</h4>
            <p className={`text-muted ${showFullDesc ? '' : 'text-truncate-multiline'}`}>
              {experience.desc}
            </p>
            <button
              className="btn btn-link p-0 text-primary"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? 'View Less' : 'View More'}
            </button>
          </div>

            <div className="mb-4 border rounded p-4">
              <h5 className="fw-semibold mb-2">📜 History</h5>
              <p>{experience.history}</p>
            </div>

            {/* Modern Itinerary */}
            <div className="mb-4 border rounded p-4">
              <h5 className="fw-semibold mb-4">🧭 Itinerary</h5>
              {experience.itinerary.map((step, idx) => (
                <div key={idx} className="mb-4 p-3 bg-light rounded shadow-sm">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-1">Day {idx + 1}</h6>
                      <p className="mb-0 text-muted">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '80px' }}>
              <div className="card shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="fw-bold">Ready to explore?</h5>
                  <p className="text-muted">Secure your spot today!</p>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#bookingModal"
                    >
                      Book This Experience
                    </button>
                    <a href="mailto:your@email.com" className="btn btn-outline-primary btn-lg">Contact Organizer</a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold mb-2">Traveler Reviews</h6>
                <div className="card p-3 shadow-sm">
                  {experience.reviews.slice(0, 2).map((review, idx) => (
                    <div key={idx} className="mb-3">
                      <strong>{review.name}</strong>
                      <p className="text-warning mb-1">
                        {Array(review.rating).fill(0).map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </p>
                      <p className="small text-muted mb-0">{review.comment}</p>
                    </div>
                  ))}
                  <Link href="#" className="small text-primary">View all reviews</Link>
                </div>
              </div>

              <div>
                <h6 className="fw-semibold mb-2">📍 Location</h6>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe
                    src={experience.location}
                    width="100%"
                    height="250"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form
             onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as any;

              const data = {
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                message: form.message.value,
                experience: experience.name,
              };

                  try {
                    const res = await fetch('/api/book', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });

                    const result = await res.json();
                    if (res.ok) {
                      alert('Booking inquiry sent successfully!');
                      form.reset();
                      // Optional: close modal
                      (document.getElementById('bookingModal') as any)?.classList.remove('show');
                    } else {
                      alert(result.message || 'Failed to send booking.');
                    }
                  } catch (err) {
                    console.error(err);
                    alert('An unexpected error occurred.');
                  }
                }}
              >
              <div className="modal-header">
                <h5 className="modal-title" id="bookingModalLabel">Book This Experience</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows={3}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}