import { NavLink, useNavigate, useLocation } from "react-router";
import logo from "../../assets/images/FullLogoSVG.svg";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import FlowCapLogo from "./Logo.tsx";
import "../../styles/Header.css";

gsap.registerPlugin(ScrollToPlugin);

export function DocHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    if (location.pathname !== "/documents") {
      navigate("/documents");
      setTimeout(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power3.inOut",
        });
      }, 100);
    } else {
      gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" });
    }
  };
  return (
    <nav className="nav">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} className="nav-logo" alt="FlowCap Logo" />
        </NavLink>
        <span>FlowCap</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#our-goals" onClick={(e) => handleScroll(e, "#our-goals")}>
            Our Goals
          </a>
        </li>
        <li>
          <a href="#analytics" onClick={(e) => handleScroll(e, "#analytics")}>
            Honesty & Transparency
          </a>
        </li>
        <li>
          <a href="#analytics" onClick={(e) => handleScroll(e, "#analytics")}>
            Application Standings
          </a>
        </li>
        <li>
          <a href="#team" onClick={(e) => handleScroll(e, "#team")}>
            Policies
          </a>
        </li>
        <li>
          <a href="#team" onClick={(e) => handleScroll(e, "#team")}>
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="#features" onClick={(e) => handleScroll(e, "#features")}>
            Application Status
          </a>
        </li>

        <div className="nav-divider"></div>

        <li>
          <NavLink to="/revenue-tracker">Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/revenue-logger">Logger</NavLink>
        </li>
        <li>
          <NavLink to="/revenue-logger">User Portal</NavLink>
        </li>

        <div className="nav-divider"></div>
      </ul>
    </nav>
  );
}
