import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.scss';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../Button/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/selectors/selectors';
import { loadCategories } from '../../store/actions';

function Footer() {
  const [t, i18n] = useTranslation('global');

  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper">
          {/*Section 1*/}
          <div className="footer-section-1">
            <Link to="/">
              <img src={KangarooBrand} alt="brand" />
            </Link>
            <div className="social-icons">
              <p>Follow Us On Social Media:</p>
              <ul>
                <li>
                  <a href="https://www.facebook.com/keepcoding.training/">
                    <FacebookIcon fontSize={'large'} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/KeepCoding_">
                    <TwitterIcon fontSize={'large'} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/keepcoding_es/">
                    <InstagramIcon fontSize={'large'} />
                  </a>
                </li>
                <li>
                  <a href="pinterest">
                    <PinterestIcon fontSize={'large'} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*Section 2*/}
          <div className="footer-section-2">
            <div className="col">
              <h4 className="title">About</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="">How it Works</Link>
                </li>
                <li>
                  <Link to="">Carrers</Link>
                </li>
                <li>
                  <Link to="">Press</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Categories</h4>
              <ul className="categories-two-col">
                {categories?.map((categorie) => (
                  <li key={categorie._id}>
                    <Link to="">{categorie.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Support</h4>
              <ul>
                <li>
                  <Link to="">Documentation</Link>
                </li>
                <li>
                  <Link to="">FAQ's</Link>
                </li>
                <li>
                  <Link to="">Dashboard</Link>
                </li>
                <li>
                  <Link to="">Support Center</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="title">Get in touch</h4>
              <p>We don't send spam so don't worry.</p>
              <form className="newsletter-form">
                <input
                  className="input"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  onChange={() => alert('implement')}
                ></input>
                <Button
                  primary
                  rounded
                  className="newsletter-button"
                  type="submit"
                  value="Enviar datos"
                >
                  submit
                </Button>
              </form>
            </div>
          </div>

          {/*Section 3*/}
          <div className="footer-section-3">
            <div>© 2022 Kangaroo. All Right Reserved.</div>
            <div className="menu-secondary">
              <Link to="">Help</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Cookie Notice</Link>
              <Link to="">Security</Link>
              <Link to="">Terms of Use</Link>
            </div>
            <div className="language">
              <button onClick={() => i18n.changeLanguage('en')}>English</button>
              <button onClick={() => i18n.changeLanguage('es')}>Español</button>
            </div>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
