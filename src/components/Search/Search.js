import React from "react";
import "../../components/Search/Search.css";
import Icon from "../../images/2.png";

function Search({ value, changeHandler, run, found, toggle }) {
  return (
    <div className={toggle ? "darkSearchContainer" : "searchContainer"}>
      <div className="imgAndInput">
        <img src={Icon} className="searchIcon" alt="searchIcon" />
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
