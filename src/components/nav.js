import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="gnb">
      <Link className="link" to="/">
        <div className="gnb_logo">Artijan</div>
      </Link>

      <Link className="gnb_link link" to="/">
        <span className="gnb_about">About me</span>
      </Link>
    </nav>
  );
}

export default Nav;
