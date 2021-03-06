import React, { useState, useEffect } from "react";
import fetchData from "../requests/getFlights";
import SearchFlights from "../components/SearchFlights";
import "../styles/App.css";

function App() {
  const [searchFlights, setSearchFlights] = useState([]);

  useEffect(() => {
    const searchFlights = fetchData();
    setSearchFlights(searchFlights);
    console.log(searchFlights);
  }, [searchFlights, setSearchFlights]);

  return (
    <div className="App">
      <header>
        <img
          className="plane-img"
          src="https://p4.wallpaperbetter.com/wallpaper/1017/525/123/the-sky-aviation-the-plane-background-wallpaper-preview.jpg"
          alt="plane-img"
        />
      </header>
      <h2>Where do you want to go today?</h2>

      <div className="page">
        <div className="content">
          <SearchFlights setSearchFlights={setSearchFlights} />
        </div>
      </div>
    </div>
  );
}

export default App;
