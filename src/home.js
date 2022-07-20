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
  const scrollContainer1 = useRef();
  const scrollContainer2 = useRef();
  const scrollContainer3 = useRef();
  const scrollContainer4 = useRef();

  let windowWidth = 0;
  let moveWidth = 0;

  let scrollCount = 1;

  async function wheelEvent(e) {
    e.preventDefault();
    windowWidth = scrollContainer1.current.clientWidth;

    console.log(windowWidth);
    console.log(scrollCount);
    console.log(scrollContainer);

    if (e.deltaY > 0) {
      // moveWidth = scrollCount * windowWidth;
      scrollContainer1.current.scrollLeft += windowWidth;
      scrollContainer2.current.scrollLeft += windowWidth;
      scrollContainer3.current.scrollLeft += windowWidth;
      scrollContainer4.current.scrollLeft += windowWidth;

      // if (scrollCount >= 1 && scrollCount < 4) {
      //   scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
      //   scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
      //   scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
      //   scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;

      //   scrollCount++;
      // } else if (scrollCount === 4) {
      //   scrollCount = 4;
      // }
    } else {
      // moveWidth = (scrollCount - 1) * windowWidth;
      if (scrollCount >= 2 && scrollCount <= 4) {
        scrollContainer1.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer2.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer3.current.style.transform = `translateX(${moveWidth}px)`;
        scrollContainer4.current.style.transform = `translateX(${moveWidth}px)`;

        scrollCount--;
      }
    }
  }

  return (
    <>
      <div ref={scrollContainer} onWheel={wheelEvent} className="container">
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
