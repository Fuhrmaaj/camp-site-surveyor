import React, { FunctionComponent, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export const StarRating: FunctionComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate)
  }
  return (
    <div className="StarRating">
      <Rating onClick={handleRating} ratingValue={rating} showTooltip tooltipDefaultText="Your Rating" tooltipArray={["Terrible", "Bad", "Average", "Good", "Awesome!"]}/>
    </div>
  );
};
