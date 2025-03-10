import React from 'react';

interface PlanYourTripProps {
  place: string;
}

const PlanYourTrip: React.FC<PlanYourTripProps> = ({ place }) => {
  const handleSaveToItinerary = () => {
    // Logic to save the place to the user's itinerary
    alert(`${place} has been added to your itinerary!`);
  };

  return (
    <div className="container my-5 text-center">
      <button className="btn btn-primary" onClick={handleSaveToItinerary}>Plan Your Trip</button>
    </div>
  );
};

export default PlanYourTrip;