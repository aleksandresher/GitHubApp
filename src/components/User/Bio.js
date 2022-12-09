import React from "react";
import "../../components/User/Bio.css";

function Bio({ bio, toggle }) {
  return (
    <div className={toggle ? "darkBioSubContainer" : "bioSubContainer"}>
      <p className={toggle ? "darkUserBio" : "userBio"}>
        {bio ? bio : "This profile has no bio"}
      </p>
    </div>
  );
}

export default Bio;
