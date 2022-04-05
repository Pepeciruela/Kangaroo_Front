import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertImage from '../AdvertImage/AdvertImage';
import { useDispatch, useSelector } from 'react-redux';

import './AdvertCardAccountBuy.scss';
import { createAdvertReview, loadPaginatedAdverts } from '../../store/actions';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalAdvertState from '../ModelAdvertState/ModelAdvertState';
import Button from '../Button/Button';
import ModelAdvertState from '../ModelAdvertState/ModelAdvertState';
import ModalReview from '../ModalReview/ModalReview';
import { getUserData } from '../../store/selectors/selectors';
const { formatDistanceToNow } = require('date-fns');

const AdvertCardAccountBuy = ({ advert, ...props }) => {
  const dispatch = useDispatch();

  const { _id, name, state, price, image, updatedAt } = advert;
  const userData = useSelector(getUserData);

  const urlNoImage =
    'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

  //Modal review
  const [modalReview, setModalReview] = useState(false);
  const handlerConfirm = () => {
    setModalReview(modalReview ? false : true);
  };

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const handlerSendReview = (review) => {
    if (review) {
      dispatch(
        createAdvertReview(_id, {
          rating: review.rating,
          comment: review.comment,
          author: userData._id
        })
      );
    } else {
      alert('Please enter comment and rating.');
    }
    setModalReview(false);
  };

  return (
    <>
      <article id="product-card-account">
        <div className="content-card-account">
          <Link to={`/advert/${_id}`}>
            <div className="content-flex">
              <div>
                <img alt={name} src={image ? image : urlNoImage} className="cover-image" />
              </div>
              <div className="body">
                <p>${price}</p>
                <h4 className="title">{name}</h4>
              </div>
              <div>
                <p>Published: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
              <div>
                <p>Modificado: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
            </div>
          </Link>

          <div className="actions">
            <Button secondary onClick={handlerConfirm}>
              Add Review
            </Button>
          </div>
        </div>
      </article>

      {modalReview && (
        <ModalReview
          title={'Write a review of your product.'}
          onConfirm={handlerSendReview}
          onClose={handlerConfirm}
        />
      )}
    </>
  );
};
export default AdvertCardAccountBuy;
