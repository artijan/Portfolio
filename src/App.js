import React, { useRef } from "react";
import "./css/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Guide from "./guide";
import Shopping from "./shopping";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./css/app.scss";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
