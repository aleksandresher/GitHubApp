import React from "react";
import "../../components/User/RepFollow.css";

function RepFollow({ repos, followers, following, toggle }) {
  return (
    <div className={toggle ? "darkRepoFollow" : "repofollow"}>
      <div className="subContainers">
        <p className={toggle ? "darkTitle" : "title"}>Repos</p>
        <p className={toggle ? "darkNumbers" : "numbers"}>
          {repos ? repos : "0"}
        </p>
      </div>
      <div className="subContainers">
        <p className={toggle ? "darkTitle" : "title"}>Followers</p>
        <p className={toggle ? "darkNumbers" : "numbers"}>
          {followers ? followers : 0}
        </p>
      </div>
      <div className="subContainers">
        <p className={toggle ? "darkTitle" : "title"}>Following</p>
        <p className={toggle ? "darkNumbers" : "numbers"}>
          {following ? following : 0}
        </p>
      </div>
    </div>
  );
}

export default RepFollow;
