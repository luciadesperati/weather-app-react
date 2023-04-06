import React from "react";
import "./FormSearch.css";

export default function FormSearch() {
  return (
    <div className="card shadow-lg border-0 my-4 py-4 px-2">
      <div className="card-body border-0">
        <form id="form" className="d-flex w-100">
          <input
            id="city-input"
            className="form-control"
            type="search"
            placeholder="Type a city..."
          />
          <button className="btn btn-dark mx-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
