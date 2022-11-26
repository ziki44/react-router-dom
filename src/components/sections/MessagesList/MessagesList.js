function MessagesList(props) {
  return (
    <ul>
      {
        props.messages.map(message => {
          return (
            <li key={message.id}>
              {message.message} - <strong>{message.author}</strong>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MessagesList