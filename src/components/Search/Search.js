import React from "react";
import "../../components/Search/Search.css";

function Search({ value, changeHandler, run, found, toggle }) {
  return (
    <div className={toggle ? "darkSearchContainer" : "searchContainer"}>
      <div className="imgAndInput">
        <img src="../images/2.png" className="searchIcon" alt="searchIcon" />
        <input
          className={toggle ? "darkSearchInput" : "searchInput"}
          value={value}
          onChange={changeHandler}
          placeholder="Search GitHub username..."
          spellCheck="false"
        />
      </div>

      <div className="errorAndBtn">
        <p className="noResult">{found ? "No results" : ""}</p>
        <button className="searchBtn" onClick={run}>
          Search
        </button>
      </div>
    </div>
  );
}
export default Search;
