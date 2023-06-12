import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <img
        className={styles.logo}
        src="../images/Compass-logo.png"
        alt="logo"
      />
      <nav>
        <ul className={styles.nav__links}>
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
      </nav>
      <Link to="/copy">
        <button className={styles.cta}>Get Started</button>
      </Link>
    </header>
  );
}

export default Navbar;
