import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import header from '../../../resources/images/header.png';
import Button from '../../../components/Button/Button';

function Header() {
  const [t, i18n] = useTranslation('global');
  return (
    <header id="header">
      <div className="container">
        <div className="grid">
          <div className="col-left">
            <h1>
              {t('header.morethan')} <span>{t('header.32500')} </span>{' '}
              {t('header.publishedproducts')}
            </h1>
            {/*TODO: Implement redirection to login in case you are not logged in. */}
            <Link to="/account/products/create/new-product">
              <Button secondaryOutline>{t('header.uploadproduct')}</Button>
            </Link>
          </div>
          <div className="col-right">
            <img alt="" src={header}></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
