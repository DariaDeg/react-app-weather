import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          Coded by DariaDeg and{" "}
          <a
            href="https://github.com/DariaDeg/Weather-app-react"
            target="_blank"
          >
            open-sourced on 1 GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
