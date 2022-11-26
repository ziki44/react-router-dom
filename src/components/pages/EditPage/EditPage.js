import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Footer from "components/sections/Footer/Footer";
import Header from "components/sections/Header/Header";
import WelcomeMessage from "components/sections/WelcomeMessage/WelcomeMessage";
import MessagesForm from "components/sections/MessagesForm/MessagesForm";

import { getDataToEdit, putEditedMessage } from '../../../helpers/http.js'

function EditPage() {
  const [authorInput, setAuthorInput] = useState('');
  const [isAuthorInputError, setIsAuthorInputError] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [isMessageInputError, setIsMessageInputError] = useState(false);

  // jak odebrac to id z parametrow?
  // params jest to obiekt z parametrami przychodzacymi do strony
  const params = useParams();

  // funkcja useNavigate z react-router-dom, zwraca nam funkcje, ktora umozliwia nam przechodzenie miedzy stronami
  const navigate = useNavigate();

  useEffect(() => {
      getDataToEdit(params.messageId)
      .then(data => {
        // potrzebuje wypelnic inputy danymi, ktore pochodza z BE
        setAuthorInput(data.author)
        setMessageInput(data.message);
      })
  }, [])

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

    const editedMessage = {
      author: authorInput,
      message: messageInput
    }

    putEditedMessage(params.messageId, editedMessage)
    .then(() => {
      // Jak sie uda zmienic rekord w bazie, to potrzebuje przekierowac uzytkownika na strone glowna
      navigate('/')
    })

    // Czyszczenie pol formularza
    setAuthorInput('');
    setMessageInput('');
  }

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  }

  return (
    <div>
      <Header />

      <WelcomeMessage>
        <h3>Edit your message</h3>
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

      <Footer />
    </div>
  )
}

export default EditPage;