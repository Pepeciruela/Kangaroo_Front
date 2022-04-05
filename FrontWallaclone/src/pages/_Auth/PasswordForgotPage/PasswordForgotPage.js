import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './PasswordForgotPage.scss';
import Button from '../../../components/Button/Button';

import { forgetPassword } from '../../../store/actions';

function PasswordForgotPage() {
  const dispatch = useDispatch();
  const [sendEmail, setSendEmail] = useState(false);
  const [value, setValue] = useState({ content: '' });
  const { content } = value;

  const handleChange = (event) => {
    setValue({ content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(forgetPassword(value));
    setSendEmail(true);
  };

  return (
    <div id="password-forgot-page">
      <div className="modal">
        {/*TODO: implement condition states UI*/}
        {!sendEmail ? (
          <>
            <div className="header">
              <div>icono</div>
              <h1 className="title">Forgot your password?</h1>
              <p className="subtitle">
                Enter the email address associated with yout account and we will send you a link to
                reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="body">
                <div className="input-item">
                  <label>Enter your email</label>
                  <input
                    name="email"
                    className="input"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={content}
                    required
                    onChange={handleChange}
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
              <h1 className="title">Check yout email</h1>
              <p className="subtitle">
                We sent a password reset link to
                <span>emailsample@gmail.com</span>
              </p>
            </div>

            <div className="body">
              <div>
                <Button secondary full>
                  Open email app
                </Button>
              </div>
              <p>
                Did not receive the email?{' '}
                <Button
                  text
                  // onClick={() => {
                  //   setSendEmail(false);
                  // }}
                >
                  Click to resend
                </Button>
              </p>
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

export default PasswordForgotPage;
