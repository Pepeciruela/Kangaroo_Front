import React from 'react';
import Button from '../../../components/Button/Button';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './LogoutPage.scss';
import { useDispatch } from 'react-redux';
import { logoutInitiate } from '../../../store/actions';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/services/userService';
import { useHistory } from 'react-router-dom';

function LogoutPage() {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    logout().then(() => {
      dispatch(logoutInitiate());
      history.push('/');
    });
  };

  return (
    <div id="logout-page">
      <LayoutAccount title={'Logout'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
        <div className="account-container">
          <h3>Hope to see you back soon</h3>
          <p>are you sure you want to logout from Kangaroo?</p>
          <div className="buttons">
            <Link to="/">
              <Button primaryOutline>Cancel</Button>
            </Link>
            <Button secondary onClick={handleLogout}>
              Yes, I'm sure
            </Button>
          </div>
        </div>
      </LayoutAccount>
    </div>
  );
}

export default LogoutPage;
