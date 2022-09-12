import { Link } from "react-router-dom";
import "./menu.scss";

function NavMenu() {
  return (
    <ul>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/projects">Some Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  );
}

export default NavMenu;
