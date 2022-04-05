import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { signUpUser } from '../../../store/actions';
import { getUi, getUserData } from '../../../store/selectors/selectors';
import { toast } from 'react-hot-toast';

import './RegisterPage.scss';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';
import LoadingBox from '../../../components/LoadingBox/LoadingBox';
import CustomToaster from '../../../components/CustomToaster/CustomToaster';

export function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, error } = useSelector(getUi);
  useEffect(() => {
    if (error) {
      toast.error(`${error.message}: ${error.error}`);
    }
  }, [error]);

  const userData = useSelector(getUserData);
  if (userData !== null) {
    history.push('/');
  }

  const [value, setValue] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: ''
  });

  const [term, setTerm] = useState({
    terms: false
  });

  const handleChange = ({ target: { value, name } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangeCheckbox = (event) => {
    setTerm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpUser(value));
  };

  return (
    <div id="register-page">
      <div className="col-left">Image</div>
      <div className="col-right">
        <>
          {!isLoading ? (
            <div className="modal">
              <div className="header">
                <h1 className="title">Create account</h1>
                <p className="subtitle">
                  Already have an account?{' '}
                  <span className="link">
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>

              <div className="body">
                <form onSubmit={handleSubmit}>
                  <div className="grid-inputs">
                    <div className="input-item">
                      <label>Email address *</label>
                      <input
                        className="input"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        value={value.email}
                        onChange={handleChange}
                      ></input>
                    </div>

                    <div className="input-item">
                      <label>Username *</label>
                      <input
                        name="name"
                        className="input"
                        type="text"
                        id="name"
                        placeholder="Enter user name"
                        required
                        value={value.username}
                        onChange={handleChange}
                      ></input>
                    </div>

                    <div className="input-item">
                      <label>Password *</label>
                      <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Enter your password"
                        required
                        autoComplete="off"
                        value={value.password}
                        onChange={handleChange}
                      ></input>
                    </div>

                    <div className="input-item">
                      <label>Confirm Password *</label>
                      <input
                        name="passwordConfirm"
                        className="input"
                        type="password"
                        placeholder="Enter your password"
                        required
                        autoComplete="off"
                        value={value.confirmPassword}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>

                  <div className="options">
                    <div className="remenberme">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={term.terms}
                        onChange={handleChangeCheckbox}
                      />
                      <label>
                        Accept the <Link to="/terms">Terms</Link> and{' '}
                        <Link to="/privacy-policy">Privacy Policy</Link>{' '}
                      </label>
                    </div>
                  </div>

                  <div>
                    <Button
                      secondary
                      full
                      type="submit"
                      disabled={
                        !value.email ||
                        value.password !== value.passwordConfirm ||
                        !value.name ||
                        !term.terms
                      }
                    >
                      Create account
                    </Button>
                  </div>
                </form>
              </div>

              <div className="footer">
                <p>Or sign in using</p>
                <div className="button-group">
                  <button>Create account via Facebbok</button>
                  <button>Create account via Google</button>
                </div>
              </div>
            </div>
          ) : (
            !isLoading && <NotResultsFound />
          )}
          {/*Loading and errors */}
          {isLoading && <LoadingBox />}
          {error && <CustomToaster />}
        </>
      </div>
    </div>
  );
}

export default RegisterPage;
