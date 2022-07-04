import React from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";
import SideNav from "./components/sideNav";

function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <SideNav />
        <div className="scroll my">
          <My />
        </div>

        <Link to="/detail">
          <div className="scroll detail ">
            <Career name="Product Information Design" />
          </div>
        </Link>
        <Link to="/guide">
          <div className="scroll guide ">
            <Career2 name="Shopping Guide Design" />
          </div>
        </Link>
        <Link to="/shopping">
          <div className="scroll shopping ">
            <Career3 name="Event Page Design" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
