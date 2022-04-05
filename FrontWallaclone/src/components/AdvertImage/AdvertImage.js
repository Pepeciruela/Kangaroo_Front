import React from 'react';
import './AdvertImage.scss';

function AdvertImage({ imageServer, alt }) {
  const urlPhoto = `${process.env.REACT_APP_WALLACLONE_API_BASE_URL}/uploads/${imageServer}`;
  const noImage = `${process.env.REACT_APP_WALLACLONE_API_BASE_URL}/uploads/noimage.jpg`;

  if (imageServer) {
    return (
      <div id="advert-image">
        <img className="image" src={urlPhoto} alt={alt} />
      </div>
    );
  } else {
    return (
      <div id="advert-image">
        <img className="image" src={noImage} alt="" />
      </div>
    );
  }
}

export default AdvertImage;
