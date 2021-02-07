import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="row">
      <div className="col-sm">
        <form className="search-city">
          <input
            type="text"
            id="city-input"
            className="form"
            placeholder="Search for a city"
            autoComplete="off"
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button id="current-location-button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
}