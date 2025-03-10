import React from 'react';

interface ReviewsProps {
  place: string;
}

const Reviews: React.FC<ReviewsProps> = ({ place }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <p>List of reviews for {place}...</p>
      {/* Add more detailed content here */}
    </div>
  );
};

export default Reviews;