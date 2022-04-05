import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Button/Button';
import { deleteUser } from '../../../../store/actions';
import { getUserData } from '../../../../store/selectors/selectors';
import './TabProfileCloseAccount.scss';

function TabProfileCloseAccount() {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  console.log(userData._id);
  const [value, setValue] = useState({
    deleteAccount: ''
  });
  const handleChange = ({ target: { value, name } }) => {
    setValue(() => ({
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value.deleteAccount !== 'delete') {
      return;
    }
    dispatch(deleteUser(userData._id));
  };

  useEffect(() => {
    setValue(value);
  }, [setValue]);

  return (
    <div id="tab-profile-close-account">
      <div className="info-box">
        <span>icon</span>
        <div>
          <h3>Are you sure?</h3>
          <p>Once you confirm, all of your account data will be permanently delete.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label>
            Type DELETE to confirm
            <p>To confirm this, type "DELETE"</p>
          </label>
          <input
            name="deleteAccount"
            className="input"
            type="text"
            id="delete"
            placeholder="Write the word"
            required
            value={value.deleteAccount}
            onChange={handleChange}
          ></input>
        </div>
        <Button type="submit" secondary>
          Delete Your Account
        </Button>
      </form>
    </div>
  );
}

export default TabProfileCloseAccount;
