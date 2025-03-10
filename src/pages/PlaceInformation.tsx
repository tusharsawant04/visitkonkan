import React from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMap from '../components/GoogleMap';
import CollapsibleTabs from '../components/CollapsibleTabs';
import PlanYourTrip from '../components/PlanYourTrip';
import './PlaceInformation.css'; // Create a CSS file for custom styles

const PlaceInformation = () => {
  const router = useRouter();
  const { place } = router.query;

  // Ensure place is a string
  const placeName = Array.isArray(place) ? place[0] : place;

  return (
    <div>
      <header className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url(https://example.com/header-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4">{placeName}</h1>
        </div>
      </header>
      <div className="container my-5">
        <h2>History</h2>
        <p>History of {placeName}...</p>
        <h2>Description</h2>
        <p>Detailed description of {placeName}...</p>
        <h2>Best Time to Visit</h2>
        <p>Best time to visit {placeName}...</p>
      </div>
      <div className="container my-5">
        <CollapsibleTabs place={placeName || ''} />
      </div>
      <div className="container my-5">
        <GoogleMap place={placeName || ''} />
      </div>
      <div className="container my-5">
        <PlanYourTrip place={placeName || ''} />
      </div>
    </div>
  );
};

export default PlaceInformation;