export const getMessages = () => {
  return fetch('http://localhost:5000/messages')
    .then(res => res.json())
}

export const addMessage = (messageToAdd) => {
  fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(messageToAdd)
  })
}

export const removeMessage = (idToRemove) => {
  fetch(`http://localhost:5000/messages/${idToRemove}`, {
    method: 'DELETE'
  })
}