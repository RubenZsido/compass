import "./Navbar.scoped.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="#">Compass</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/copy">Copy Generator</Link>
        </li>
        <li>
          <Link to="/image">Image Generator</Link>
        </li>
        <li>
          <Link to="/web">Website Generator</Link>
        </li>
        <li>
          <Link to="/adpost">Ad Post</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
