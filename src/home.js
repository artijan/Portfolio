import React, { useRef, useState } from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";
import SideNav from "./components/sideNav";

function Home() {
  const scrollContainer1 = useRef();
  const scrollContainer2 = useRef();
  const scrollContainer3 = useRef();
  const scrollContainer4 = useRef();

  let windowWidth = 0;
  let moveWidth = 0;

  let scrollCountRight = 1;
  let scrollCountLeft = 1;

  async function wheelEvent(e) {
    e.preventDefault();
    windowWidth = scrollContainer1.current.clientWidth;

    console.log(e.deltaY);
    console.log(scrollCountRight, scrollCountLeft);
    console.log(scrollContainer2.current.scrollLeft);

    if (e.deltaY > 0) {
      moveWidth = scrollCountRight * windowWidth;

      if (scrollCountRight >= 1 && scrollCountRight < 4) {
        scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
        scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;

        scrollCountRight++;
      } else if (scrollCountRight === 4) {
        scrollCountRight = 4;
        scrollCountLeft = scrollCountRight;
      }
    } else {
      moveWidth = (scrollCountLeft - 1) * windowWidth;
      if (scrollCountLeft >= 2 && scrollCountLeft <= 4) {
        scrollContainer1.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer2.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer3.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer4.current.style.transform = `translateX(${moveWidth}px)`;

        scrollCountLeft--;
      }
    }
  }

  return (
    <>
      <div onWheel={wheelEvent} className="container">
        <Nav />
        <SideNav />
        <div className="scrollContainer">
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
