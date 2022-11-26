import Input from "../../atoms/Input/Input";

function MessagesForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          Author
          <Input
            value={props.authorInput}
            onChange={props.handleAuthorChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message
          <Input
            value={props.messageInput}
            onChange={props.handleMessageChange}
          />
        </label>
      </div>
      <button>Send</button>
    </form>
  )
}

export default MessagesForm;