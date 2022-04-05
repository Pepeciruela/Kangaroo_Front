import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../../components/Button/Button';
import { getUserAuth, getUserData } from '../../store/selectors/selectors';
import { useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.scss';

const urlNoImage =
  'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

function Navbar() {
  const userIsAuth = useSelector(getUserAuth);
  const userData = useSelector(getUserData);

  const handlerSearch = () => {
    alert('implement');
  };

  const [t, i18n] = useTranslation('global');
  return (
    <header id="navbar">
      <div className="container grid">
        <div className="nav-section-brand">
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
          </Link>
          {userData ? (
            <Link className="explore-link" to={`/account/profile/${userData._id}`}>
              <span>{t('navbar.profile')}</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
        <div className="nav-section-search">
          <span className="icon">
            <SearchOutlinedIcon />
          </span>
          <input
            className="input"
            type="text"
            id="search"
            placeholder={t('navbar.searchbar')}
            required
            onChange={handlerSearch}
          ></input>
        </div>

        <div className="nav-section-buttons">
          <div className="language">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('es')}>Español</button>
          </div>
          <div>
            <Link to="/account/messages">
              <ChatIcon />
            </Link>
          </div>
          {!userIsAuth ? (
            <>
              <Link to="/login">
                <Button textWhite>{t('navbar.login')}</Button>
              </Link>
              <Link to="/register">
                <Button white>{t('navbar.signup')}</Button>
              </Link>
            </>
          ) : (
            <div className="user-data">
              <Link to={`/account/profile/${userData._id}`}>
                <div className="avatar">
                  <img
                    alt={''}
                    className="avatar-image"
                    src={userData ? userData.imageAvatar : urlNoImage}
                  />
                  <div>
                    <p>Hello</p>
                    <p className="name">{userData?.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
