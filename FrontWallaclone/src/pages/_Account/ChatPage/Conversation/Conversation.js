import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdvertDetail } from '../../../../store/actions';
import { getAdvertDetail } from '../../../../store/selectors/selectors';
import { getOneUserForId } from '../../../../api/services/userService';
import { getSingleAdvert } from '../../../../api/services/advertService';

import './Conversation.scss';
import Button from '../../../../components/Button/Button';

function Conversation({ conversation, currentUser }) {
  // console.log('conversation', conversation);
  // console.log('currentUser', currentUser);
  //TODO: Implement in REDUX

  const [user, setUser] = useState({});
  const [outlined, SetOutlined] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userFriend = conversation.members.find((member) => member !== currentUser._id);
    // console.log('userFriend', userFriend);

    const getUser = async () => {
      try {
        const res = getOneUserForId(userFriend);
        // const res = await axios(
        //   `${process.env.REACT_APP_WALLACLONE_API_BASE_URL}/api/v1/user/${userFriend._id}`
        // );
        setUser(res.results);
      } catch (err) {
        console.log('error: ', err);
      }
    };
    if (userFriend) {
      getUser();
    }
  }, [conversation.members, currentUser._id]);

  // useEffect(() => {
  //   if (onlineUsers.includes(currentUser)) {
  //     SetOutlined(true);
  //   } else {
  //     SetOutlined(false);
  //   }
  // }, [currentUser, onlineUsers]);

  const advert = useSelector((state) => getAdvertDetail(state, conversation.advertisement));
  useEffect(() => {
    dispatch(loadAdvertDetail(conversation.advertisement));
  }, [dispatch, conversation.advertisement]);

  return (
    <div id="conversation">
      <Link to={`/advert/${advert?._id}`}>
        <img src={advert?.image} alt="" />
      </Link>
      <div className="conversation-data">
        <p>{user?.name}</p>
        <p>{advert?.name}</p>
        <p>{outlined ? 'Connected' : 'Disconected'}</p>
      </div>
    </div>
  );
}

export default Conversation;
