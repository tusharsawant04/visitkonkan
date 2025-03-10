import React from 'react';

interface ReviewsProps {
  place: string;
}

const Activities: React.FC<ReviewsProps> = ({ place }) => {
  return (
    <div>
      <h3>Activities</h3>
      <p>List of activities for {place}...</p>
      {/* Add more detailed content here */}
    </div>
  );
};

export default Activities;