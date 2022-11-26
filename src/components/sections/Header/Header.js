import Link from "../../atoms/Link/Link";

function Header(props) {
  return (
    <header>
      <h1>{props.logo}</h1>
      <nav>
        <ul>
          <li>
            <Link href="#" text="Dodaj nowy post"/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;