import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Trip {
  id: number;
  name: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
}

const RecommendedTrips: React.FC<{ trips: Trip[] }> = ({ trips }) => {
  return (
    <div className="row g-4">
      {trips.map((trip) => (
        <div key={trip.id} className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm hover-card">
            <div className="position-relative">
              <Image
                src={trip.image}
                alt={trip.name}
                width={400}
                height={300}
                className="card-img-top"
              />
              <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                {trip.duration}
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{trip.name}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-primary fw-bold mb-0">
                  {trip.price}
                </p>
                <span className="text-warning">
                  ★ {trip.rating}
                </span>
              </div>
              <Link 
                href={`/trip-details/${trip.id}`}
                className="btn btn-outline-primary w-100 mt-3"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedTrips;