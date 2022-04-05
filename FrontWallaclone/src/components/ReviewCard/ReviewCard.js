import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ReviewStart from '../ReviewStart/ReviewStart';
import './ReviewCard.scss';

function ReviewCard({ review, author, ...props }) {
  const { _id, comment, rating, updatedAt } = review;

  return (
    <article id="review-card">
      <div>
        <div>
          <img className="imgage-avatar" src={author?.imageAvatar}></img>
        </div>
      </div>
      <div>
        <Link to={`/user/${author?._id}`}>
          <h4>{author?.name}</h4>
        </Link>
        <p>{updatedAt}</p>
        <ReviewStart reviewRating={rating} />
        <p>{comment}</p>
      </div>
    </article>
  );
}

export default ReviewCard;
