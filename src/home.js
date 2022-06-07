import React from "react";
import Nav from "./components/nav";
import My from "./components/my";
import Career from "./components/career";
import { Link } from "react-router-dom";
import Box from "./components/box";

function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="scroll my">
          <My />
        </div>
        <Link to="/detail">
          <div className="scroll">
            <Career name="상세이미지" />
          </div>
        </Link>

        <div className="scroll">
          <Career name="구매가이드" />
        </div>
        <div className="scroll">
          <Career name="기획전" />
        </div>
      </div>
    </>
  );
}

export default Home;
