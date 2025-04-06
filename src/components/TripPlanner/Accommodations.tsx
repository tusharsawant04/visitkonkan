import React from 'react';
import Image from 'next/image';

interface Accommodation {
  id: number;
  name: string;
  type: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
}

interface AccommodationProps {
  tripDetails: {
    destination: string;
    dates: Array<{ start: string; end: string }>;
    duration: number;
    groupSize: number;
    budget: string;
    preferences: string[];
  };
  setTripDetails: (details: AccommodationProps['tripDetails']) => void;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

const hotels: Accommodation[] = [
  {
    id: 1,
    name: 'Seaside Resort',
    type: 'Resort',
    price: 5000,
    rating: 4.5,
    image: '/images/hotel1.jpg',
    amenities: ['Pool', 'WiFi', 'Restaurant'],
  },
  // Add more hotels
];

const Accommodations: React.FC<AccommodationProps> = ({
  tripDetails,
  setTripDetails,
  onNext,
  onBack,
}) => {
  return (
    <div className="accommodations-section">
      <h2 className="mb-4">Choose Your Stay</h2>
      
      <div className="row g-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="position-relative">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                  ₹{hotel.price}/night
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <div className="mb-2">
                  <span className="text-warning">★</span> {hotel.rating}
                </div>
                <p className="card-text">
                  {hotel.amenities.join(' • ')}
                </p>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => {
                    setTripDetails({ ...tripDetails });
                    onNext();
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Accommodations;