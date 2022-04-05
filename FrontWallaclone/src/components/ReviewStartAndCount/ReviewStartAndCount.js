import React from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './ReviewStartAndCount.scss';

function ReviewStartAndCount({ reviewCount, reviewStart, ...props }) {
  return (
    <div id="review-start-and-count">
      <p className="start-icon">
        <StarOutlinedIcon />
      </p>
      <p className="review-values">
        {reviewStart}
        <span className="review-count">({reviewCount}) </span>
      </p>
    </div>
  );
}

export default ReviewStartAndCount;
