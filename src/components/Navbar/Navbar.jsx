import "./Navbar.scoped.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <img src="/src/assets/images/image.png" className="nav-logo" alt="logo" />
      <div className="nav-link-container">
        <Link to="/" class="nav-link">
          Home
        </Link>
        <Link to="/copy" class="nav-link">
          Copy
        </Link>
        <Link to="/image" class="nav-link">
          Image
        </Link>
        <Link to="/web" class="nav-link">
          Web
        </Link>
        <Link to="/adpost" class="nav-link">
          Ads
        </Link>
        <Link to="/quickGen" class="nav-link">
          Quick Gen
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
