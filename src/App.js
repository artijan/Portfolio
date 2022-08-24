import React from "react";
import "./css/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Guide from "./guide";
import Shopping from "./shopping";
import "./css/app.scss";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
