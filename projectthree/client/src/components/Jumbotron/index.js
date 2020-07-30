import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "#c4f4fd", fontFamily: "STSong", clear: "both", textAlign: "center", color: "black"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
