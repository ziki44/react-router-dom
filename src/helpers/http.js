
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

export const getDataToEdit = (id) => {
  return fetch(`http://localhost:5000/messages/${id}`)
    .then(res => res.json())
}

export const putEditedMessage = (id, newMessage) => {
  return fetch(`http://localhost:5000/messages/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newMessage)
    })
} 