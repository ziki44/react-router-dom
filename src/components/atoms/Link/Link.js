function Link(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.text}
    </a>
  )
}

export default Link;