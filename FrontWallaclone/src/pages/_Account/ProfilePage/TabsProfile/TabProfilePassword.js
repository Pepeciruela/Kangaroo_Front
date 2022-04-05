import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../../../components/Button/Button';
import { changePassword } from '../../../../store/actions';

function TabProfilePassword() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [value, setValue] = useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changePassword(value, userId));
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id="tab-profile-password">
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label>Current password</label>
          <input
            className="input"
            name="password"
            type="password"
            id="currentPassword"
            placeholder="Enter your current password"
            required
            value={value.password}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-item">
          <label>New password</label>
          <input
            className="input"
            name="newPassword"
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            required
            value={value.newPassword}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-item">
          <label>Confirm new password</label>
          <input
            className="input"
            name="newPasswordConfirm"
            type="password"
            id="confirmNewPassword"
            placeholder="Repeat the new password"
            required
            value={value.newPasswordConfirm}
            onChange={handleChange}
          ></input>
        </div>
        <Button type="submit" secondary>
          Update Password
        </Button>
      </form>
    </div>
  );
}

export default TabProfilePassword;
