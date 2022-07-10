import React, { useRef, useState } from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";
import SideNav from "./components/sideNav";

function Home() {
  const scrollContainer = useRef();
  const [scrollEvent, setScrollEvent] = useState(false);
  let scrollCount = 0;
  let scrollMove = window.innerWidth;

  async function wheelEvent(e) {
    e.preventDefault();
    if (scrollEvent === false) {
      ScrollHandler(e);
    }

    console.log(scrollCount, scrollMove);
  }

  function ScrollHandler(e) {
    if (e.deltaY > 0) {
      scrollContainer.current.scrollLeft += window.innerWidth;
      if (scrollCount >= 0 && scrollCount <= 2) {
        scrollCount++;
        scrollMove += scrollCount * window.innerWidth;
      }
    } else if (e.deltaY < 0) {
      scrollContainer.current.scrollLeft -= window.innerWidth;
      if (scrollCount > 0 && scrollCount <= 3) {
        scrollCount--;
        scrollMove -= scrollCount * window.innerWidth;
      }
    }

    if (scrollCount === 0) {
      scrollMove = window.innerWidth;
    }
  }

  return (
    <>
      <div
        ref={scrollContainer}
        onWheel={() => {
          setTimeout(() => {
            wheelEvent();
          }, 100);
        }}
        className="container"
      >
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
