import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { loadUserDetail } from '../../store/actions';
import { getPublicUser } from '../../store/selectors/selectors';
import Button from '../Button/Button';
import './HeaderUserProfile.scss';

function HeaderUserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const publicUser = useSelector(getPublicUser);
  useEffect(() => {
    dispatch(loadUserDetail(id));
  }, [dispatch]);
  return (
    <section id="header-user-profile">
      <div className="user-info-box">
        <div>
          <img alt="" src="https://i.pravatar.cc/500" />
        </div>
        <div>
          <h3>{publicUser.name}</h3>
          {/* <p>starst</p> */}
          <div>
            {/* <p>icon</p> */}
            <p>
              {/* <span>{publicUser.followers.length}</span> seguidores,{' '} */}
              {/* <span>{publicUser.followings.length}</span> siguiendo */}
            </p>
          </div>
        </div>
      </div>

      <div className="location-box">
        <h4>Sobre mi:</h4>
        <p>{publicUser.personalDescription}</p>
        <p>
          {/* <span>icon</span> */}
          {/* 25 Sales - 1 Buy */}
        </p>
        <p>
          {/* <span>icon</span> */}
          {publicUser.location} <br />
        </p>
      </div>

      {/* <div className="map-box">Map</div> */}

      <div className="buttons-group">
        {/* <Button secondaryOutline>Follow</Button>
        <Link to="/account/messages">
          <Button secondary>Send Message</Button>
        </Link> */}

        {/* <button>...</button> */}
      </div>
    </section>
  );
}

export default HeaderUserProfile;
