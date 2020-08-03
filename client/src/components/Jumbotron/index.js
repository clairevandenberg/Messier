import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "#000034", fontFamily: "Montserrat", clear: "both", alignContent: "centre", textAlign: "center", color: "#1D84D7", height: "200px"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

