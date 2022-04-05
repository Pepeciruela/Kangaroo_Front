import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { getUserData } from '../../store/selectors/selectors';
import { createAdvertReview } from '../../store/actions';
import './ModalReview.scss';

function ModalReview({ title, onConfirm, onClose }) {
  const [review, setReview] = useState({
    rating: 0,
    comment: ''
  });

  const handleChange = ({ target: { value, name } }) => {
    setReview((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const reviewSubmitHandler = (event) => {
    onConfirm(review);
  };

  return (
    <div id="modal-review">
      <div className="content">
        <div className="header">
          <h3>{title}</h3>
          <p>{JSON.stringify(review)}</p>
        </div>

        <form className="body">
          <div className="input-item">
            <label htmlFor="rating">Rating</label>
            <select id="rating" name="rating" value={review.rating} onChange={handleChange}>
              <option value="0">Select...</option>
              <option value="1">1* Poor</option>
              <option value="2">2* Fair</option>
              <option value="3">3* Good</option>
              <option value="4">4* Very good</option>
              <option value="5">5* Excelent</option>
            </select>
          </div>
          <div className="input-item">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={review.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>

        <div className="buttons">
          <Button secondary onClick={reviewSubmitHandler}>
            Send Review
          </Button>
          <Button red onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalReview;
