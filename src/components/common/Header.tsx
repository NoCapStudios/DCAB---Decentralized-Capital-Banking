import { NavLink } from "react-router";
import logo from "../../assets/images/FullLogoSVG.svg";
// import FlowCapLogo from "./Logo.tsx";
import "../../styles/Header.css";

export function Header() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <NavLink to="/">
            {" "}
            <img src={logo} className="nav-logo" />
            {/* <FlowCapLogo size={50} /> */}
          </NavLink>
        </div>

        <ul className="nav-links">
          <a href="#analytics">Analytics</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#install-app">Download App</a>
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
