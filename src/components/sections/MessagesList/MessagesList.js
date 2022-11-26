import Button from "components/atoms/Button/Button"
import { Link } from "react-router-dom"

function MessagesList(props) {
  return (
    <ul>
      {
        props.messages.map(message => {
          return (
            <li key={message.id}>
              {message.message} - <strong>{message.author}</strong>
              <Link to={`/edit/${message.id}`}>
                <Button
                  text="Edytuj"
                />
              </Link>

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