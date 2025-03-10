import React from 'react';

interface HotelsProps {
  place: string;
}

const Hotels: React.FC<HotelsProps> = ({ place }) => {
  return (
    <div>
      <h3>Hotels</h3>
      <p>List of hotels for {place}...</p>
      {/* Add more detailed content here */}
    </div>
  );
};

export default Hotels;