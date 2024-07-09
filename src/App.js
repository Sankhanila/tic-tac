import React, { useState } from "react";
import "./App.css";
import Board from "./Board";

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
