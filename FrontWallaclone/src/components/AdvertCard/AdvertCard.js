import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertImage from '../AdvertImage/AdvertImage';
import ReviewStartAndCount from '../ReviewStartAndCount/ReviewStartAndCount';
import './AdvertCard.scss';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { IconButton, ToggleButton } from '@mui/material';

const urlNoImage =
  'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

const { formatDistanceToNow } = require('date-fns');

const AdvertCard = ({ advert, ...props }) => {
  const { _id, name, description, price, image, author, updatedAt } = advert;

  const [isFavorite, setIsFavorite] = useState(false);

  //TODO:Implement save favorites

  return (
    <article id="product-card">
      <div className="header">
        <div className="icon-container">
          <div className="button-favorites">
            <ToggleButton
              className="button-favorites"
              value="check"
              selected={isFavorite}
              onChange={() => {
                setIsFavorite(!isFavorite);
              }}
            >
              {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </ToggleButton>
          </div>
        </div>
      </div>
      <Link to={`/advert/${_id}`}>
        <div className="cover-image">
          <img alt={name} src={image ? image : urlNoImage} />
        </div>
        <div className="body">
          <h4 className="title">{name}</h4>
          <p className="description">{description}</p>
          <div className="metadata">
            <p>
              <span>icon</span> Published:{' '}
              <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
            </p>
          </div>
        </div>
      </Link>
      <div className="footer">
        {author ? (
          <Link to={`/user/${author._id}`} className="vendor-data">
            <img className="img-avatar" alt={author.name} src={author.imageAvatar} />
            <div>
              {author.name}
              <ReviewStartAndCount reviewCount={45} reviewStart={3.5} />
            </div>
          </Link>
        ) : (
          <strong>User not available</strong>
        )}
        <p className="price">${price}</p>
      </div>
    </article>
  );
};
export default AdvertCard;
