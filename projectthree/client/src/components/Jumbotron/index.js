import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "#c4f4fd", clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
