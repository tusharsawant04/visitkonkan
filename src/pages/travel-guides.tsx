'use client';

import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const featured = [
  {
    title: 'Guide to Beaches',
    desc: 'Explore Kokan’s hidden coves, sunrise spots and top beach shacks.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    tag: 'Relax',
    rating: 4.8,
    reviews: 124
  },
  {
    title: 'Adventure Guide',
    desc: 'Trekking, snorkeling and coastal trails for thrill-seekers.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    tag: 'Adventure',
    rating: 4.7,
    reviews: 98
  },
  {
    title: 'Cultural Guide',
    desc: 'Local festivals, food trails and village experiences.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    tag: 'Culture',
    rating: 4.9,
    reviews: 76
  }
];

const summaries = [
  { title: 'Beach Guide Summary', desc: 'Top beaches and best visiting months.', img: featured[0].img },
  { title: 'Adventure Guide Summary', desc: 'Quick tips for permits and gear.', img: featured[1].img },
  { title: 'Cultural Guide Summary', desc: 'Food, festivals and local stays.', img: featured[2].img }
];

export default function TravelGuides() {
  return (
    <Layout>
      <div className="container py-5">
        {/* Custom CSS for modern look */}
        <style jsx>{`
          .search-card { border-radius: 16px; box-shadow: 0 6px 20px rgba(22, 24, 35, 0.08); }
          .guide-card { border-radius: 14px; overflow: hidden; transition: transform .18s ease, box-shadow .18s ease; }
          .guide-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(22,24,35,.12); }
          .img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.32) 100%); }
          .badge-soft { background-color: rgba(99,102,241,0.12); color: #4f46e5; font-weight: 600; }
          .small-muted { font-size: .9rem; color: #6b7280; }
          .ghost-btn { background: transparent; border: 1px solid rgba(0,0,0,0.06); }
          @media (max-width: 767px) { .search-card { padding: 1rem; } }
        `}</style>

        {/* Header + Search */}
        <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
          <div className="flex-grow-1">
            <h1 className="fw-bold mb-1">Discover Kokan</h1>
            <p className="small-muted mb-3">Curated travel guides, routes and downloadable resources to make your trip effortless.</p>

            <div className="card search-card p-3 d-flex gap-2 align-items-center">
              <div className="flex-grow-1 d-flex gap-2 align-items-center">
                <i className="bi bi-search fs-5 text-muted"></i>
                <input className="form-control border-0 shadow-none" placeholder="Search guides, beaches, activities…" />
              </div>

              <select className="form-select w-auto d-none d-md-inline-block" style={{ maxWidth: 220 }}>
                <option value="all">All interests</option>
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="culture">Culture</option>
              </select>

              <button className="btn btn-primary d-none d-md-inline-block">Search</button>
            </div>
          </div>

          <div className="d-none d-md-flex flex-column align-items-end" style={{ minWidth: 180 }}>
            <div className="text-end small-muted">Estimated Routes</div>
            <div className="fw-bold fs-4">12+</div>
            <div className="text-end small-muted mt-2">PDF Guides</div>
            <div className="fw-bold fs-4">3</div>
          </div>
        </div>

        {/* Featured Cards (modern grid like Airbnb) */}
        <section className="mb-5">
          <div className="row g-4">
            {featured.map((f, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card guide-card h-100">
                  <div style={{ position: 'relative', height: 220 }}>
                    <Image src={f.img} alt={f.title} fill style={{ objectFit: 'cover' }} />
                    <div className="img-overlay"></div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge badge-soft py-2 px-3">{f.tag}</span>
                    </div>
                    <div className="position-absolute bottom-0 start-0 p-3 text-white">
                      <h5 className="mb-1">{f.title}</h5>
                      <div className="d-flex align-items-center gap-2 small-muted">
                        <i className="bi bi-star-fill text-warning"></i>
                        <span className="fw-bold text-white">{f.rating}</span>
                        <span className="text-white-50">({f.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-muted mb-3">{f.desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">Read</button>
                        <button className="btn ghost-btn btn-sm">Save</button>
                      </div>

                      <div className="d-flex gap-2 align-items-center">
                        <small className="small-muted">2–4 days</small>
                        <button className="btn btn-sm btn-primary rounded-pill">Book Guide</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters + Summaries */}
        <div className="d-flex flex-column flex-lg-row gap-4 mb-4">
          <div className="flex-grow-1">
            <div className="d-flex gap-2 flex-wrap mb-3">
              <button className="btn btn-outline-secondary btn-sm">Beaches</button>
              <button className="btn btn-outline-secondary btn-sm">Trekking</button>
              <button className="btn btn-outline-secondary btn-sm">Food</button>
              <button className="btn btn-outline-secondary btn-sm">Family</button>
            </div>

            <h4 className="mb-3">Travel Guide Summaries</h4>
            <div className="row g-3">
              {summaries.map((s, i) => (
                <div key={i} className="col-12 col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div style={{ position: 'relative', height: 120 }}>
                      <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body">
                      <h6 className="mb-1">{s.title}</h6>
                      <p className="text-muted small">{s.desc}</p>
                      <div className="mt-3 d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Read More</button>
                        <button className="btn btn-sm ghost-btn">Share</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside style={{ minWidth: 260 }}>
            <div className="card p-3 shadow-sm">
              <h6 className="mb-2">Quick Planner</h6>
              <p className="small-muted">Pick dates and interests to get an estimated route and cost.</p>
              <div className="mb-2">
                <label className="form-label small">Dates</label>
                <input type="text" className="form-control" placeholder="Select dates" />
              </div>
              <div className="mb-3">
                <label className="form-label small">Interest</label>
                <select className="form-select">
                  <option>Adventure</option>
                  <option>Relaxation</option>
                  <option>Culture</option>
                </select>
              </div>
              <button className="btn btn-primary w-100">Generate Plan</button>
            </div>

            <div className="card mt-3 p-3 shadow-sm">
              <h6 className="mb-2">Download Guide</h6>
              <p className="small-muted">Get the complete Kokan PDF for offline use.</p>
              <a href="/guides/kokan-guide.pdf" download className="btn btn-outline-primary w-100">Download PDF</a>
            </div>
          </aside>
        </div>

        {/* Map + CTA */}
        <div className="row g-4 align-items-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="rounded-3 overflow-hidden" style={{ height: 340, boxShadow: '0 10px 30px rgba(22,24,35,.06)' }}>
              <div className="h-100 d-flex align-items-center justify-content-center text-muted">Map placeholder — integrate Google Maps or React Leaflet</div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card p-4 shadow-sm">
              <h5>Plan your perfect Kokan trip</h5>
              <p className="small-muted">Custom itineraries available — tell us your dates and interests.</p>
              <button className="btn btn-primary w-100">Request Custom Itinerary</button>
            </div>
          </div>
        </div>

        {/* Footer simple */}
        <footer className="text-center small text-muted">
          <div>© {new Date().getFullYear()} Kokan Guides • Built with ❤️</div>
        </footer>
      </div>
    </Layout>
  );
}
