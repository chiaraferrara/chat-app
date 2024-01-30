/** @format */

import { ChatBox } from './ChatBox';
import { useState } from 'react';
import { Message, utilityGetLoggedEmail, utilityGetUserLogged } from '../utilities';
function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [textmessage, setTextMessage] = useState<Message[]>([]);

  const saveMessageToLocalStorage = () => {
    const messages: Message[] = JSON.parse(localStorage.getItem('messages') || '[]');
    const message: Message = {
      author: utilityGetLoggedEmail(),
      date: new Date().toLocaleString(),
      text: inputMessage,
    };
    setTextMessage(messagesState => [...messagesState, message]);
    localStorage.setItem('messages', JSON.stringify([...messages, message]));
    setInputMessage('');
  };

  return (
    <>
      <ChatBox>
        <form
          name="sendMessageForm"
          action="#"
          onSubmit={event => {
            event.preventDefault();
            saveMessageToLocalStorage();
            setInputMessage('');
          }}
        >
          <label className="item-input-wrapper">
            <textarea
              placeholder="Send a message..."
              onChange={event => setInputMessage(event.target.value)}
              required
            ></textarea>
          </label>
          <div className="footer-btn-wrap">
            <button type="submit">SEND</button>
          </div>
        </form>
      </ChatBox>
    </>
  );
}

export default Chat;
