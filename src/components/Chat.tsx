/** @format */

import { ChatBox, MessageContainer, Wrapper } from './ChatBox';
import { useState, useEffect } from 'react';
import { Message, utilityGetLoggedEmail} from '../utilities';
import { Button, DeleteButton, Textarea } from './Button';
function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [textmessage, setTextMessage] = useState<Message[]>([]);

  //array vuoto ([]). l'effetto verrà eseguito solo una volta quando il componente viene montato e non è eseguito nuovamente a meno che qualche dipendenza elencata nell'array cambi.
  //si recuperano i messaggi dal localStorage utilizzando localStorage.getItem('messages').
  // setTextMessage viene utilizzata per aggiornare la variabile di stato textmessage con i messaggi recuperati.
  useEffect(() => {
    const storedMessages: Message[] = JSON.parse(localStorage.getItem('messages') || '[]');
    setTextMessage(storedMessages);
  }, []);

  const saveMessageToLocalStorage = () => {
    const messages: Message[] = JSON.parse(localStorage.getItem('messages') || '[]');
    const message: Message = {
      id: Math.random(),
      author: utilityGetLoggedEmail(),
      date: new Date().toLocaleString(),
      text: inputMessage,
    };
    setTextMessage(messagesState => [...messagesState, message]);
    localStorage.setItem('messages', JSON.stringify([...messages, message]));
    setInputMessage('');
  };

  const deleteMessage = (id: number) => {
    const prevMessages: Message[] = JSON.parse(localStorage.getItem('messages') || '[]');
    const messageIndex = prevMessages.findIndex(message => message.id === id);
    if (messageIndex != -1) {
      prevMessages.splice(messageIndex, 1);
    }
    setTextMessage(prevMessages);
    localStorage.setItem('messages', JSON.stringify(prevMessages));
  };

  return (
    <>
    <Wrapper>
      <ChatBox>
        {textmessage.map((message, index) => (
          <MessageContainer key={index} isMyMessage={message.author === utilityGetLoggedEmail()}>
            <strong>{message.author}</strong>
            <p>{message.text}</p>
            <p>{message.date}</p>
            {message.author === utilityGetLoggedEmail() && (
              <DeleteButton style={{ marginLeft: '10px' }} onClick={() => deleteMessage(message.id)}>
                Delete
              </DeleteButton>
            )}
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
      </Wrapper>
    </>
  );
}

export default Chat;
