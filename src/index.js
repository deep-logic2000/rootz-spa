import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ViewportProvider } from "./helpers/WindowContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </BrowserRouter>
  </React.StrictMode>
);
