import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    );
  } else {
    console.error("No se encontró el elemento con ID 'root'");
  }
});
