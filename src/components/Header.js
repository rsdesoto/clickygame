import React from "react";
import "./css/Header.css";

function Header(props) {
  return (
    <div className="headerwrap">
      <header className="Header">
        <div className="Title">
          <h2>Clicky Game</h2>
        </div>
        <div className="score">
          <p>Current Score: {props.score}</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
