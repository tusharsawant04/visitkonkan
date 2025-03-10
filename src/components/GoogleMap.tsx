import React from 'react';

interface GoogleMapProps {
  place: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ place }) => {
  return (
    <div className="map-container">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${place}`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;