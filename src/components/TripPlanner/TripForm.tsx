import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface TripFormProps {
  tripDetails: {
    destination: string;
    dates: Array<{ start: string; end: string }>;
    duration: number;
    groupSize: number;
    budget: string;
    preferences: string[];
  };
  setTripDetails: React.Dispatch<React.SetStateAction<{
    destination: string;
    dates: Array<{ start: string; end: string }>;
    duration: number;
    groupSize: number;
    budget: string;
    preferences: string[];
  }>>;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

const TripForm: React.FC<TripFormProps> = ({ tripDetails, setTripDetails, onNext }) => {
  return (
    <div className="trip-form">
      <h2 className="mb-4">Plan Your Trip to {tripDetails.destination}</h2>
      
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Travel Dates</label>
          <DatePicker
            selectsRange
            startDate={tripDetails.dates[0].start ? new Date(tripDetails.dates[0].start) : null}
            endDate={tripDetails.dates[0].end ? new Date(tripDetails.dates[0].end) : null}
            onChange={(dates: [Date | null, Date | null]) => {
              if (dates[0] && dates[1]) {
                setTripDetails(prev => ({
                  ...prev,
                  dates: [{
                    start: dates[0] ? dates[0].toISOString() : "",
                    end: dates[1] ? dates[1].toISOString() : ""
                  }],
                  duration: dates[0] && dates[1] 
                    ? Math.ceil((dates[1].getTime() - dates[0].getTime()) / (1000 * 3600 * 24)) 
                    : 0
                }));
              }
            }}
            className="form-control"
            placeholderText="Select dates"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Group Size</label>
          <input
            type="number"
            className="form-control"
            value={tripDetails.groupSize}
            onChange={(e) => setTripDetails(prev => ({ 
              ...prev, 
              groupSize: parseInt(e.target.value) || 1 
            }))}
            min="1"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Budget Range</label>
          <select 
            className="form-select"
            value={tripDetails.budget}
            onChange={(e) => setTripDetails(prev => ({ 
              ...prev, 
              budget: e.target.value 
            }))}
          >
            <option value="">Select budget range</option>
            <option value="budget">Budget (₹5000-10000)</option>
            <option value="mid">Mid-Range (₹10000-20000)</option>
            <option value="luxury">Luxury (₹20000+)</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Trip Preferences</label>
          <div className="d-flex flex-wrap gap-2">
            {['Adventure', 'Relaxation', 'Culture', 'Nature', 'Food'].map((pref) => (
              <div key={pref} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={pref}
                  checked={tripDetails.preferences.includes(pref)}
                  onChange={(e) => {
                    setTripDetails(prev => ({
                      ...prev,
                      preferences: e.target.checked
                        ? [...prev.preferences, pref]
                        : prev.preferences.filter(p => p !== pref)
                    }));
                  }}
                />
                <label className="form-check-label" htmlFor={pref}>{pref}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button 
          className="btn btn-primary"
          onClick={onNext}
          disabled={!tripDetails.dates[0].start || !tripDetails.dates[0].end || !tripDetails.budget}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default TripForm;