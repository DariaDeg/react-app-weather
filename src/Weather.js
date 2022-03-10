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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="sun"
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">7</span>
              <span className="units">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 72%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}