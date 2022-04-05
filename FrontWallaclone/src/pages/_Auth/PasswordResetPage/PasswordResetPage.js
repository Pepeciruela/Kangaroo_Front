import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PasswordResetPage.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

import { resetPassword } from '../../../store/actions';
import Button from '../../../components/Button/Button';

function PasswordResetPage() {
  const dispatch = useDispatch();
  const { userToken } = useParams();
  const [newPassword, setNewPassword] = useState(false);
  const [value, setValue] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = ({ target: { value, name } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPassword(value, userToken));
  };

  return (
    <div id="password-reset-page">
      <div className="modal">
        {/*TODO: implement logic email for reset forgot password*/}
        {!newPassword ? (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Set a new password?</h1>
              <p className="subtitle">
                Your new password must be different to previously used password.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div id="password" className="body">
                <div className="input-item">
                  <label>Password *</label>
                  <input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Enter your password"
                    value={value.password}
                    required
                    onChange={handleChange}
                    autoComplete="off"
                  ></input>
                </div>

                <div className="input-item">
                  <label>Confirm Password *</label>
                  <input
                    name="confirmPassword"
                    className="input"
                    type="password"
                    placeholder="Enter your password"
                    value={value.confirmPassword}
                    required
                    onChange={handleChange}
                    autoComplete="off"
                  ></input>
                </div>

                <div>
                  <Button secondary full type="submit">
                    send email
                  </Button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Password reset</h1>
              <p className="subtitle">
                Yout password has been success reset.
                <br />
                Click bellow to login.
              </p>
            </div>

            <div className="body">
              <Button
                secondary
                full
                onClick={() => {
                  setNewPassword(false);
                }}
              >
                Continue{' '}
              </Button>
            </div>
          </>
        )}
        <div className="footer">
          <p>
            <span>icon </span>
            <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetPage;
