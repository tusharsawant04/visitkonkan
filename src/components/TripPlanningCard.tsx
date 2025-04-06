import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Collapse } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

interface TripPlanningCardProps {
  isOpen: boolean;
  onSubmit: (tripDetails: {
    destination: string;
    tripType: string;
    budget: string;
    startDate: Date | null;
    endDate: Date | null;
  }) => void;
}

const TripPlanningCard: React.FC<TripPlanningCardProps> = ({ isOpen, onSubmit }) => {
  const [tripDetails, setTripDetails] = useState({
    destination: '',
    tripType: '',
    budget: '',
    startDate: null as Date | null,
    endDate: null as Date | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', tripDetails); // Debug log
    onSubmit(tripDetails);
  };

  return (
    <Collapse in={isOpen}>
      <div className="mt-4">
        <div className="card border-0 shadow">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Destination</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where do you want to go?"
                    value={tripDetails.destination}
                    onChange={(e) => setTripDetails({
                      ...tripDetails,
                      destination: e.target.value
                    })}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Trip Type</label>
                  <select 
                    className="form-select"
                    value={tripDetails.tripType}
                    onChange={(e) => setTripDetails({
                      ...tripDetails,
                      tripType: e.target.value
                    })}
                  >
                    <option value="">Select trip type</option>
                    <option value="adventure">Adventure</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="cultural">Cultural</option>
                    <option value="beach">Beach</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Dates</label>
                  <div className="d-flex gap-2">
                    <DatePicker
                      selected={tripDetails.startDate}
                      onChange={(date) => setTripDetails({
                        ...tripDetails,
                        startDate: date
                      })}
                      selectsStart
                      startDate={tripDetails.startDate}
                      endDate={tripDetails.endDate}
                      className="form-control"
                      placeholderText="Start Date"
                    />
                    <DatePicker
                      selected={tripDetails.endDate}
                      onChange={(date) => setTripDetails({
                        ...tripDetails,
                        endDate: date
                      })}
                      selectsEnd
                      startDate={tripDetails.startDate}
                      endDate={tripDetails.endDate}
                      minDate={tripDetails.startDate || undefined}
                      className="form-control"
                      placeholderText="End Date"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Budget Range</label>
                  <select 
                    className="form-select"
                    value={tripDetails.budget}
                    onChange={(e) => setTripDetails({
                      ...tripDetails,
                      budget: e.target.value
                    })}
                  >
                    <option value="">Select budget range</option>
                    <option value="budget">₹5,000 - ₹10,000</option>
                    <option value="mid">₹10,000 - ₹20,000</option>
                    <option value="luxury">₹20,000+</option>
                  </select>
                </div>
                <div className="col-12">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={!tripDetails.destination || !tripDetails.tripType || !tripDetails.budget}
                  >
                    Find Perfect Trips
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Collapse>
  );
};

export default TripPlanningCard;