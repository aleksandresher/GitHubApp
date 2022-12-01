import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UserInfo from "./components/User/UserInfo";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [daynight, setDayNight] = useState(false);

  function handleChange(e) {
    setUser(e.target.value);
  }
  function toggleDay() {
    setDayNight((prev) => !prev);
    document.body.style.backgroundColor = !daynight ? "#141D2F" : "#f2f2f2";
  }

  async function getData() {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data);

      setError(true);
      setNotFound(false);

      console.log(response);
    } catch (error) {
      console.log(error.message);
      setNotFound(true);
      setError(false);
    }
  }

  return (
    <div className="App">
      <Header toggle={daynight} onClick={toggleDay} />
      <Search
        value={user}
        changeHandler={handleChange}
        run={getData}
        found={notFound}
        toggle={daynight}
      />
      <UserInfo data={userData} founded={error} toggle={daynight} />
    </div>
  );
}

export default App;
