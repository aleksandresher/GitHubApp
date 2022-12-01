import React from "react";
import "../../components/User/User.css";
import format from "date-fns/format";

function User({ name, date, login, toggle }) {
  return (
    <div className="containers">
      <div className="nameLogin">
        <h1 className={toggle ? "darkUserName" : "userName"}>
          {name ? name : "No Name"}
        </h1>
        <p className="userLogin">@{login}</p>
      </div>
      <div className="dateContainer">
        <p className={toggle ? "darkRegistDate" : "registDate"}>
          Joined{date ? format(new Date(date), " d MMM Y") : ""}
        </p>
      </div>
    </div>
  );
}

export default User;
