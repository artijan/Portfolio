import React from "react";

function Nav() {
  return (
    <nav className="gnb">
      <div className="gnb_logo">Artijan</div>
      <a className="gnb_link" href="/">
        <span className="gnb_about">About me</span>
      </a>
    </nav>
  );
}

export default Nav;
