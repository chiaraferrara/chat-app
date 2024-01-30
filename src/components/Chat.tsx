/** @format */

import { ChatBox, MessageContainer } from './ChatBox';
import { useState, useEffect } from 'react';
import { Message, utilityGetLoggedEmail, utilityGetUserLogged } from '../utilities';
import { Button, Textarea } from './Button';
function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [textmessage, setTextMessage] = useState<Message[]>([]);

  useEffect(() => {
    const storedMessages: Message[] = JSON.parse(localStorage.getItem('messages') || '[]');
    setTextMessage(storedMessages);
  }, []);

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
      {textmessage.map((message, index) => (
          <MessageContainer key={index} isMyMessage={message.author === utilityGetLoggedEmail()}>
            <strong>{message.author}</strong>
            <p>{message.text}</p>
            <p>{message.date}</p>
          </MessageContainer>
        ))}
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
            <Textarea
            style={{ width: "300px", border: "transparent" }}
            value={inputMessage}
              placeholder="Send a message..."
              onChange={event => setInputMessage(event.target.value)}
              required
            ></Textarea>
          </label>
          <div className="footer-btn-wrap">
            <Button type="submit">SEND</Button>
          </div>
        </form>
      </ChatBox>
    </>
  );
}

export default Chat;
