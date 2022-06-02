import React from "react";

function Career(props) {
  return (
    <div className="my_carrer">
      <div className="carrer">
        <div className="img">
          <span className="text">{props.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Career;
