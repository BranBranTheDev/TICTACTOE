import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root")); //injects into the index.html file
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);