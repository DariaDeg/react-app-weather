import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city"
              classname="Form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="sun"
          />
          7 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 72%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
      Hello from DariaDeg
    </div>
  );
}
