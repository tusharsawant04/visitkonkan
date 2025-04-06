import React from 'react';

interface TransportOption {
  id: string;
  name: string;
  price: number;
  type: string;
  capacity?: number;
  duration?: string;
}

interface TransportProps {
  tripDetails: { transport: TransportOption };
  setTripDetails: (details: { transport: TransportOption }) => void;
  onNext: () => void;
  onBack: () => void;
}

const transportOptions = [
  {
    type: 'Car Rental',
    options: [
      { id: 'car1', name: 'Economy Car', price: 1500, capacity: 4 },
      { id: 'car2', name: 'SUV', price: 2500, capacity: 6 },
    ],
  },
  {
    type: 'Bus',
    options: [
      { id: 'bus1', name: 'AC Bus', price: 800, duration: '6 hours' },
      { id: 'bus2', name: 'Luxury Bus', price: 1200, duration: '5 hours' },
    ],
  },
];

const Transport: React.FC<TransportProps> = ({
  tripDetails,
  setTripDetails,
  onNext,
  onBack,
}) => {
  return (
    <div className="transport-section">
      <h2 className="mb-4">Choose Transport Option</h2>

      {transportOptions.map((category) => (
        <div key={category.type} className="mb-4">
          <h3 className="h5 mb-3">{category.type}</h3>
          <div className="row g-3">
            {category.options.map((option) => (
              <div key={option.id} className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{option.name}</h5>
                    <p className="card-text">
                      Price: ₹{option.price}
                      {'capacity' in option && ` • Capacity: ${option.capacity} persons`}
                      {'duration' in option && ` • Duration: ${option.duration}`}
                    </p>
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => {
                        setTripDetails({
                          ...tripDetails,
                          transport: { ...option, type: category.type },
                        });
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
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Transport;