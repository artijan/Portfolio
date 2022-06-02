import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="gnb">
      <Link to="/">
        <div className="gnb_logo">Artijan</div>{" "}
      </Link>

      <a className="gnb_link" href="/">
        <span className="gnb_about">About me</span>
      </a>
    </nav>
  );
}

export default Nav;
