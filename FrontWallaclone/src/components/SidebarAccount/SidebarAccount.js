import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarAccount.scss';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selectors/selectors';

function SidebarAccount() {
  const userData = useSelector(getUserData);
  return (
    <nav id="sidebar-account">
      <ul>
        <li>
          <NavLink
            className="item"
            to={`/account/profile/${userData._id}`}
            activeClassName="selected"
          >
            <PermIdentityIcon />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item"
            to={`/account/products/${userData._id}`}
            activeClassName="selected"
          >
            <ArticleOutlinedIcon />
            <p>Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to={`/account/favorites`} activeClassName="selected">
            <FavoriteBorderOutlinedIcon />
            <p>Favorites</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to={`/account/messages`} activeClassName="selected">
            <ForumOutlinedIcon />
            <p>Messages</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to={`/account/reviews`} activeClassName="selected">
            <ReviewsOutlinedIcon />
            <p>Reviews</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to={`/account/logout`} activeClassName="selected">
            <LogoutOutlinedIcon />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarAccount;
