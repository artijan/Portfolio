import React from "react";
import Nav from "./components/nav";
import My from "./components/my";
import Career from "./career";
import "./css/app.scss";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="scroll">
          <My />
        </div>
        <div className="scroll">
          <Career />
        </div>
        <div className="scroll">
          <Career />
        </div>
      </div>
    </>
  );
}

export default App;
