import React from "react";

function Cuad_tablero({ value, onClick }) {
  return (
    <button
      className="btn btn-outline-primary btn-lg d-flex justify-content-center align-items-center m-1"
      style={{ width: "100px", height: "100px" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cuad_tablero;
