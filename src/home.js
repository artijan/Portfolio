import React, { useRef } from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";
import SideNav from "./components/sideNav";

function Home() {
  const scrollContainer = useRef();
  const scrollContainer1 = useRef();
  const scrollContainer2 = useRef();
  const scrollContainer3 = useRef();
  const scrollContainer4 = useRef();

  let moveWidth = 0;
  let scrollCount = 0;
  let windowWidth = 0;

  async function wheelEvent(e) {
    e.preventDefault();
    windowWidth = scrollContainer1.current.clientWidth;
    moveWidth = scrollCount * windowWidth;
    console.log(scrollCount, e.deltaY);

    if (e.deltaY > 0) {
      scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
      scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
      scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
      scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;

      if (scrollCount >= 1 && scrollCount < 3) {
        scrollCount++;
      } else if (scrollCount === 3) {
        scrollCount = scrollCount;
      } else if (scrollCount === 0) {
        scrollCount = 1;
      }
    } else if (e.deltaY < 0) {
      moveWidth = (scrollCount - 1) * windowWidth;
      if (scrollCount >= 1 && scrollCount <= 2) {
        scrollCount--;
        scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;
      } else if (scrollCount === 3) {
        scrollCount--;
      } else if (scrollCount === 0) {
        scrollCount = 0;
      }
    }
  }

  return (
    <>
      <div onWheel={wheelEvent} className="container">
        <Nav />
        <SideNav width={windowWidth} />
        <div ref={scrollContainer} className="scrollContainer">
          <div ref={scrollContainer1} className="scroll my">
            <My />
          </div>

          <Link to="/detail">
            <div ref={scrollContainer2} className="scroll detail ">
              <Career name="Product Information Design" />
            </div>
          </Link>
          <Link to="/guide">
            <div ref={scrollContainer3} className="scroll guide ">
              <Career2 name="Shopping Guide Design" />
            </div>
          </Link>
          <Link to="/shopping">
            <div ref={scrollContainer4} className="scroll shopping ">
              <Career3 name="Event Page Design" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
