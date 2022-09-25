import React, { useEffect, useRef } from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";

function SideNav(moveWidth) {
  return (
    <div className="sideNav ">
      <a href="#home">
        <span>Home</span>
      </a>
      <a href="#work1">
        <span>Product Info</span>
      </a>
      <a href="#work2">
        <span>Shopping Guide</span>
      </a>
      <a href="#work3">
        <span>Event Page</span>
      </a>
    </div>
  );
}

function MoveX(
  scrollContainer1,
  scrollContainer2,
  scrollContainer3,
  scrollContainer4,
  moveWidth
) {
  scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
  scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
  scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
  scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;
}

function Home() {
  let timeOut;

  const scrollContainer = useRef();
  const scrollContainer1 = useRef();
  const scrollContainer2 = useRef();
  const scrollContainer3 = useRef();
  const scrollContainer4 = useRef();

  let moveWidth = 0;
  let scrollCount = 0;
  let windowWidth = 0;

  async function WheelEvent(e) {
    e.preventDefault();
    windowWidth = scrollContainer1.current.clientWidth;
    moveWidth = scrollCount * windowWidth;
    let deltaY = e.deltaY;

    try {
      if (!timeOut) {
        timeOut = setTimeout(() => {
          timeOut = null;
          if (deltaY > 0) {
            if (scrollCount >= 0 && scrollCount <= 2) {
              scrollCount++;
            } else if (scrollCount >= 3) {
              scrollCount = 3;
            }
            MoveX(
              scrollContainer1,
              scrollContainer2,
              scrollContainer3,
              scrollContainer4,
              moveWidth
            );
          } else if (deltaY < 0) {
            if (scrollCount > 0 && scrollCount <= 3) {
              scrollCount--;
            } else if (scrollCount <= 0) {
              scrollCount = 0;
            }
            MoveX(
              scrollContainer1,
              scrollContainer2,
              scrollContainer3,
              scrollContainer4,
              moveWidth
            );
          }
        }, 1000);
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }

    console.log(scrollCount, deltaY, moveWidth);

    SideNav(moveWidth);
  }

  return (
    <>
      <div onWheel={WheelEvent} className="container">
        <Nav />
        <SideNav />
        <div ref={scrollContainer} className="scrollContainer">
          <div id="home" ref={scrollContainer1} className="scroll my">
            <My />
          </div>

          <Link to="/detail">
            <div id="work1" ref={scrollContainer2} className="scroll detail ">
              <Career name="Product Information Design" />
            </div>
          </Link>
          <Link to="/guide">
            <div id="work2" ref={scrollContainer3} className="scroll guide ">
              <Career2 name="Shopping Guide Design" />
            </div>
          </Link>
          <Link to="/shopping">
            <div id="work3" ref={scrollContainer4} className="scroll shopping ">
              <Career3 name="Event Page Design" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
