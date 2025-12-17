import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/FullLogo.svg";
import "../../styles/Header.css";

export function Header() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <NavLink to="/">
            {" "}
            <img src={logo} className="nav-logo" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <HashLink to="/#install-app">Download App</HashLink>
          </li>
          <li>
            <NavLink to="/revenue-tracker">Tracker</NavLink>
          </li>
          <li>
            <NavLink to="/revenue-logger">Logger</NavLink>
          </li>
          <li>
            <NavLink to="/auth">isSignedUp ? Sign In : Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
