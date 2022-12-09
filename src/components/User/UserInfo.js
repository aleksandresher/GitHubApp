import React from "react";
import "../../components/User/UserInfo.css";

import User from "./User";
import Bio from "./Bio";
import RepFollow from "./RepFollow";
import Footer from "../Footer/Footer";

function UserInfo({ data, founded, toggle }) {
  if (founded) {
    return (
      <div className={toggle ? "darkContainer" : "container"}>
        <div className="bioContainer">
          <div className="imageContainer">
            <img src={data.avatar_url} className="userImage" alt="UserImage" />
          </div>
          <div className="subContainer">
            <User
              name={data.name}
              date={data.created_at}
              login={data.login}
              toggle={toggle}
            />
          </div>
        </div>
        <Bio bio={data.bio} toggle={toggle} />

        <RepFollow
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
          toggle={toggle}
        />
        <Footer
          location={data.location}
          blog={data.blog}
          twitter={data.twitter_username}
          company={data.company}
          toggle={toggle}
        />
      </div>
    );
  }
}
export default UserInfo;
