import React, { useState } from "react";
import Cuad_tablero from "./cuad_tablero";

function Board({ squares, onClick }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [namesSubmitted, setNamesSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamesSubmitted(true);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Ganador: ${winner === "X" ? player1 : player2}`;
  } else {
    status =
      "Siguiente jugador: " +
      (squares.filter(Boolean).length % 2 === 0 ? player1 : player2);
  }

  const renderSquare = (i) => {
    return <Cuad_tablero value={squares[i]} onClick={() => onClick(i)} />;
  };

  if (!namesSubmitted) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4 text-primary">Registro de Jugadores</h1>
        <form onSubmit={handleSubmit} className="w-50">
          <div className="form-group">
            <label htmlFor="player1">Jugador 1</label>
            <input
              type="text"
              className="form-control"
              id="player1"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="player2">Jugador 2</label>
            <input
              type="text"
              className="form-control"
              id="player2"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Comenzar Juego
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4 text-primary">Tablero de Juego</h1>
      <div className="board-container">
        <div className="mb-3">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

export default Board;
