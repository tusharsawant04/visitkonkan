import React from 'react';

interface SummaryProps {
  tripDetails: {
    destination: string;
    dates: [Date, Date];
    duration: number;
    groupSize: number;
    hotel?: {
      name: string;
      price: number;
    };
    transport?: {
      type: string;
      name: string;
      price: number;
    };
  };
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

const Summary: React.FC<SummaryProps> = ({
  tripDetails,
  onBack,
 
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const calculateTotalCost = () => {
    const hotelCost = (tripDetails.hotel?.price || 0) * tripDetails.duration;
    const transportCost = tripDetails.transport?.price || 0;
    return hotelCost + transportCost;
  };

  return (
    <div className="summary-section">
      <h2 className="mb-4">Trip Summary</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h3 className="h5 mb-3">Basic Details</h3>
          <dl className="row mb-0">
            <dt className="col-sm-3">Destination</dt>
            <dd className="col-sm-9">{tripDetails.destination}</dd>

            <dt className="col-sm-3">Dates</dt>
            <dd className="col-sm-9">
              {tripDetails.dates[0] && formatDate(tripDetails.dates[0])} - 
              {tripDetails.dates[1] && formatDate(tripDetails.dates[1])}
            </dd>

            <dt className="col-sm-3">Duration</dt>
            <dd className="col-sm-9">{tripDetails.duration} days</dd>

            <dt className="col-sm-3">Group Size</dt>
            <dd className="col-sm-9">{tripDetails.groupSize} persons</dd>
          </dl>
        </div>
      </div>

      {tripDetails.hotel && (
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="h5 mb-3">Accommodation</h3>
            <p className="mb-1"><strong>{tripDetails.hotel.name}</strong></p>
            <p className="mb-0">₹{tripDetails.hotel.price} per night</p>
          </div>
        </div>
      )}

      {tripDetails.transport && (
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="h5 mb-3">Transport</h3>
            <p className="mb-1">
              <strong>{tripDetails.transport.type}: </strong>
              {tripDetails.transport.name}
            </p>
            <p className="mb-0">₹{tripDetails.transport.price}</p>
          </div>
        </div>
      )}

      <div className="card mb-4 bg-light">
        <div className="card-body">
          <h3 className="h5 mb-3">Total Cost</h3>
          <h4 className="mb-0">₹{calculateTotalCost()}</h4>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
        <button className="btn btn-primary" onClick={() => alert('Booking confirmed!')}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Summary;