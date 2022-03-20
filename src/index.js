import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Image() {
  return (
    <div>
      <img src="./image/IMG_3497.jpg" alt="London" />
    </div>
  );
}
export default Image;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
