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

  let scrollCount = 1;

  function wheelEvent(e) {
    e.preventDefault();
    ScrollHandler(e);
  }

  const minusMove = function (
    scrollCount,
    scrollContainer1,
    scrollContainer2,
    scrollContainer3,
    scrollContainer4
  ) {
    return new Promise((resolve) => {
      resolve(
        (scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`),
        (scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`),
        (scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`),
        (scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`),
        scrollCount++
      );
    });
  };

  async function ScrollHandler(e) {
    windowWidth = scrollContainer1.current.clientWidth;

    if (e.deltaY > 0) {
      if (scrollCount >= 1 && scrollCount < 4) {
        moveWidth = scrollCount * windowWidth;
        await minusMove(
          scrollCount,
          scrollContainer1,
          scrollContainer2,
          scrollContainer3,
          scrollContainer4
        );
      }
    } else {
      if (scrollCount > 1 && scrollCount <= 4) {
        if (scrollCount === 1) {
          scrollContainer1.current.scrollLeft = 0;
          // scrollContainer2.current.scrollLeft = 0;
          // scrollContainer3.current.scrollLeft = 0;
          // scrollContainer4.current.scrollLeft = 0;
        } else {
          moveWidth = (scrollCount - 1) * windowWidth;
          scrollContainer1.current.style.transform = `translateX(${moveWidth}px)`;
          scrollContainer2.current.style.transform = `translateX(${moveWidth}px)`;
          scrollContainer3.current.style.transform = `translateX(${moveWidth}px)`;
          scrollContainer4.current.style.transform = `translateX(${moveWidth}px)`;
        }

        scrollCount--;
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
