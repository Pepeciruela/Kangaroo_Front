import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import AdvertCard from '../../../components/AdvertCard/AdvertCard';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ChatPage.scss';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../store/selectors/selectors';
import { updateAdvert } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import ModelAdvertState from '../../../components/ModelAdvertState/ModelAdvertState';

import {
  getAllMessagesConversation,
  getAllUserConversations,
  createMessage
} from '../../../api/services/chatServices';
import { getSingleAdvert } from '../../../api/services/advertService';

function ChatPage() {
  //TODO: User data mock simulate login. Implemento with redux and finaly authentication

  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setcurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversationAdvert, setConversationAdvert] = useState(null);

  const socket = useRef();
  const scrollRef = useRef();
  const userData = useSelector(getUserData);

  //Modal state
  const [selectAdvertState, setSelectAdvertState] = useState('ForSale');
  useEffect(() => {
    setSelectAdvertState(conversationAdvert?.state);
  }, [conversationAdvert]);

  const [modalState, setModalState] = useState(false);
  const handlerModalState = () => {
    setModalState(modalState ? false : true);
  };

  const handlerChangeState = (newState) => {
    setSelectAdvertState(newState);
    dispatch(
      updateAdvert(
        {
          name: conversationAdvert?.name,
          nameEn: conversationAdvert?.nameEn,
          description: conversationAdvert?.description,
          descriptionEn: conversationAdvert?.descriptionEn,
          type: conversationAdvert?.type,
          advertState: conversationAdvert?.advertState,
          price: conversationAdvert?.price,
          categories: conversationAdvert?.categories,
          gallery: conversationAdvert?.gallery,
          tags: conversationAdvert?.tags,
          author: conversationAdvert?.author._id,
          image: [conversationAdvert?.image],
          state: newState
        },
        conversationAdvert._id
      )
    );
    setModalState(false);
  };

  //TODO: Refactoring with Redux

  //Init socket
  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', ({ data }) => {
      setArrivalMessage({
        userSenderId: data.userSenderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
  }, []);

  //Read message, extract user and change state message list
  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.userSenderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation]);

  //Online users
  useEffect(() => {
    socket.current.emit('addUser', userData._id);
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
      console.log('users', users);
    });
  }, [userData]);

  //Get all conversations users
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await getAllUserConversations(userData._id);
        // console.log('getConversations', res.results);
        setConversations(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    if (userData) {
      getConversations();
    }
  }, [userData]);

  //TODO: Refactoring with Redux
  //Get messages current conversation
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await getAllMessagesConversation(currentConversation?._id);
        // console.log('getMessages', res);
        setMessages(res.results);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentConversation) {
      getMessages();
    }
  }, [currentConversation]);

  //Return advert of conversation
  useEffect(() => {
    const getAdvert = async () => {
      try {
        const res = await getSingleAdvert(currentConversation?.advertisement);
        setConversationAdvert(res.results);
      } catch (err) {
        console.log('error: ', err);
      }
    };

    if (currentConversation?.advertisement) {
      getAdvert();
    }
  }, [currentConversation]);

  const handleSubmitMessage = async (event) => {
    // event.preventDefault();

    //Message database
    const sendMessage = {
      userSenderId: userData._id,
      conversationId: currentConversation?._id,
      text: newMessage
    };

    //Socket
    const userReceiverId = currentConversation?.members.find((member) => member !== userData._id);
    console.log('userReceiverId', userReceiverId);
    console.log('socket', socket);

    //Send message socket
    socket.current.emit('sendMessage', {
      userSenderId: userData._id,
      userReceiverId,
      text: newMessage
    });

    try {
      //Send message database
      const res = await createMessage(sendMessage);
      setMessages([...messages, res.results]);
      setNewMessage(''); //Reset input
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div id="chat-page">
      <LayoutAccount
        title={'Messages'}
        subtitle={'Lorem ipsum dolor sit amet, consectetur'}
        background={false}
      >
        <div className="chat-container">
          {/*Menu */}
          <div className="chat-col-menu">
            <h4>Your conversations</h4>
            <div className="chat-col-menu-box">
              {conversations.map((conversation, index) => (
                //Select one conversation in list conversations and currentConversation
                <div key={index} onClick={() => setcurrentConversation(conversation)}>
                  <Conversation conversation={conversation} currentUser={userData} />
                </div>
              ))}
            </div>
          </div>
          {/*Box */}
          <div className="chat-col-messages">
            <div className="chat-col-messages-box">
              {currentConversation ? (
                <>
                  <div className="chat-box-top">
                    {messages.map((message, index) => (
                      <div key={index} ref={scrollRef}>
                        <Message message={message} own={message.userSenderId === userData._id} />
                      </div>
                    ))}
                  </div>
                  <div className="chat-box-bottom">
                    <div className="input-item">
                      <input
                        className="input "
                        type="text"
                        id="message"
                        placeholder="Write your message..."
                        col="30"
                        value={newMessage}
                        onKeyPress={(event) => {
                          if (event.key === 'Enter') {
                            handleSubmitMessage();
                          }
                        }}
                        onChange={(event) => setNewMessage(event.target.value)}
                      ></input>
                    </div>
                    <div>
                      <Button secondary onClick={handleSubmitMessage}>
                        Send
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div>Open a conversation to start a chat.</div>
              )}
            </div>
          </div>

          {/*Chat*/}
          <div className="chat-col-users-online">
            {/* {conversationAdvert ? <AdvertCard advert={conversationAdvert} /> : <></>} */}
            {/* {isAuthorAdvert ? <AdvertCard advert={conversationAdvert} /> : <></>} */}
            {conversationAdvert ? (
              userData._id !== conversationAdvert?.author ? (
                <>
                  <AdvertCard advert={conversationAdvert} />
                </>
              ) : (
                <>
                  <AdvertCard advert={conversationAdvert} />

                  <Button red onClick={() => handlerModalState()}>
                    {selectAdvertState}
                  </Button>
                </>
              )
            ) : (
              <> </>
            )}
          </div>
        </div>

        {modalState && (
          <ModelAdvertState
            title={'Change advert you want to delete this ad?'}
            onChangeState={handlerChangeState}
            onClose={handlerModalState}
            advertState={conversationAdvert.state}
          />
        )}
      </LayoutAccount>
    </div>
  );
}

export default ChatPage;
