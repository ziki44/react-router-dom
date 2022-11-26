import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import MessagesForm from '../MessagesForm/MessagesForm';
import MessagesList from '../MessagesList/MessagesList';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

import {
  addMessage,
  removeMessage,
  getMessages
} from '../../../helpers/http';

import './App.css';

function App() {
  const [authorInput, setAuthorInput] = useState('');
  const [isAuthorInputError, setIsAuthorInputError] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [isMessageInputError, setIsMessageInputError] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then(data => {
        setMessages(data);
      })
  }, [])

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pole author nie moze byc puste i pole message musi miec wiecej niz 2 znaki
    const isValid = authorInput.trim().length > 0
      && messageInput.trim().length > 2;

    // Blad bedzie true/false w zaleznosci od tego, jaka jest wartosc inputa

    // wyswietl blad, jak pole authorInput jest puste
    setIsAuthorInputError(authorInput.trim().length === 0)
    // wyswietl blad, jak pole messageInput ma mniej lub rowne 2 znaki
    setIsMessageInputError(messageInput.trim().length <= 2)

    // if(authorInput.trim().length === 0) {
    //   setIsAuthorInputError(true)
    // } else {
    //   setIsAuthorInputError(false)
    // }


    if(!isValid) {
      // jesli w funkcji uzywamy return, to JS nie wejdzie do dalszego wywolania funkcji
      return;
    }

    // Date.now() zwraca obecny czas jako timestamp
    // timestamp to jest liczba sekund ktora uplynela od 1.01.1970
    const randomId = Date.now();

    const newMessage = {
      id: randomId,
      author: authorInput,
      message: messageInput
    }

    const newMessages = messages.concat(newMessage)
    addMessage(newMessage)
    setMessages(newMessages)

    // Czyszczenie pol formularza
    setAuthorInput('');
    setMessageInput('');
  }

  const handleMessageRemove = (id) => {
    const filteredMessage = messages.filter(message => {
      return message.id !== id
    })

    removeMessage(id)
    setMessages(filteredMessage)
  }

  return (
    <div>
      <Header logo="Instagram App"/>
      <WelcomeMessage>
        <h3>Add new post</h3>
      </WelcomeMessage>
      <MessagesForm
        handleSubmit={handleSubmit}
        authorInput={authorInput}
        handleAuthorChange={handleAuthorChange}
        messageInput={messageInput}
        handleMessageChange={handleMessageChange}
        isAuthorInputError={isAuthorInputError}
        isMessageInputError={isMessageInputError}
      />
      <WelcomeMessage>
        <p>Messages List</p>
      </WelcomeMessage>
      <MessagesList
        messages={messages}
        handleMessageRemove={handleMessageRemove}
      />
    </div>
  );
}

export default App;
