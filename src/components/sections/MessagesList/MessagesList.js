import Button from "../../atoms/Button/Button"

function MessagesList(props) {
  return (
    <ul>
      {
        props.messages.map(message => {
          return (
            <li key={message.id}>
              {message.message} - <strong>{message.author}</strong>
              <Button
                text="X"
                onClick={() => props.handleMessageRemove(message.id)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default MessagesList