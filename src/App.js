import React from "react";
import logo from "./logo.svg";
import { API_KEY, API_URL } from "./config/index";
import Iframe from "react-iframe";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [videos, setVideos] = React.useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    getVideos(searchValue);
    setSearchValue("");
  };

  const getVideos = async (value) => {
    setVideos([]);
    const res = await fetch(
      `${API_URL}?part=snippet&key=${API_KEY}&q=${value}&maxResults=10&type=video`
    );
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
  };

  return (
    <div>
      <Header
        submitHandler={submitHandler}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        flag={videos.length > 0}
      />
      <List videos={videos} />
    </div>
  );
}

export default App;
