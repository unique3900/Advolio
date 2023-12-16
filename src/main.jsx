import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextAPI } from "./Context/ContextAPI.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextAPI>
        <App />
      </ThemeContextAPI>
    </BrowserRouter>
  </React.StrictMode>
);
