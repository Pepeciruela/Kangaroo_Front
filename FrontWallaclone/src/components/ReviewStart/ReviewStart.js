import React from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './ReviewStart.scss';

function ReviewStart({ reviewRating, ...props }) {
  return (
    <div id="review-start">
      <p>{reviewRating} </p>
      <StarOutlinedIcon className="icon" />
    </div>
  );
}

export default ReviewStart;
