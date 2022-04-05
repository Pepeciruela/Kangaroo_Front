import React from 'react';
import './Message.scss';

const { formatDistanceToNow } = require('date-fns');

function Message({ message, own }) {
  return (
    <div id="message">
      <div className={own ? 'message-content own' : 'message-content'}>
        <div className="message-top">
          <img src="https://i.pravatar.cc/500" alt="" />
          <div>
            <p className="message-text">{message.text}</p>
            <div className="message-bottom">{formatDistanceToNow(new Date(message.createdAt))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
