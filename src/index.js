import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import City from "./City";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <City name="Irving" temp={88} />
      <City name="Bronx" temp={78} />
      <City name="Columbus" temp={82} />
    </div>
  </StrictMode>
);
