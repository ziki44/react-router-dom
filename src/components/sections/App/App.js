import { useState } from 'react';
import Header from '../Header/Header';
import MessagesForm from '../MessagesForm/MessagesForm';
import MessagesList from '../MessagesList/MessagesList';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import './App.css';

function App() {
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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

  const addMessage = (messageToAdd) => {
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(messageToAdd)
    })
  }

  // Zadanie dla was:
  // 1. Zrob obsluge pobierania wszystkich pobierania
  // 2. Przy kazdym elemencie listy, dorob przycick X, ktory bedzie usuwal wiadomosc z serwera

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
      />
      <WelcomeMessage>
        <p>Messages List</p>
      </WelcomeMessage>
      <MessagesList messages={messages}/>
    </div>
  );
}

export default App;
