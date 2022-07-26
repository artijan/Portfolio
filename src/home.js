import React, { useRef, useState } from "react";
import Nav from "./components/nav";
import My from "./components/my";
import { Link } from "react-router-dom";
import Career from "./components/career";
import Career2 from "./components/carrer2";
import Career3 from "./components/career3";
import SideNav from "./components/sideNav";

function Home() {
  let timeout;

  const scrollContainer = useRef();
  const scrollContainer1 = useRef();
  const scrollContainer2 = useRef();
  const scrollContainer3 = useRef();
  const scrollContainer4 = useRef();

  const [scrollCheck, setScrollCheck] = useState(false);

  let moveWidth = 0;
  let scrollCount = 0;
  let windowWidth = 0;

  async function wheelEvent(e) {
    e.preventDefault();
    windowWidth = scrollContainer1.current.clientWidth;
    moveWidth = scrollCount * windowWidth;
    let deltaY = Math.sign(e.deltaY);

    console.log(scrollCount, deltaY, moveWidth);
    if (scrollCheck === false) {
      if (deltaY > 0) {
        timeout = setTimeout(() => {
          scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;
          if (scrollCount >= 0 && scrollCount <= 2) {
            scrollCount++;
          } else if (scrollCount >= 3) {
            scrollCount = 3;
          }
          setScrollCheck(true);
        }, 1000);
      } else if (deltaY < 0) {
        timeout = setTimeout(() => {
          if (scrollCount > 0 && scrollCount <= 3) {
            scrollCount--;
          } else if (scrollCount <= 0) {
            scrollCount = 0;
          }
          scrollContainer1.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer2.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer3.current.style.transform = `translateX(${-moveWidth}px)`;
          scrollContainer4.current.style.transform = `translateX(${-moveWidth}px)`;
        }, 1000);
      }
    } else {
      clearTimeout(timeout);
    }

    // setCheckWidth(moveWidth);
  }

  return (
    <>
      <div onWheel={wheelEvent} className="container">
        <Nav />
        <SideNav width={moveWidth} />
        <div ref={scrollContainer} className="scrollContainer">
          <div ref={scrollContainer1} className="scroll my">
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
