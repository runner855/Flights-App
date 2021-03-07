import React, { useState, useEffect } from "react";
import "../styles/App.css";
import fetchData from "../requests/getFlights";
import SearchFlights from "./SearchFlights";
import FlightDetails from "./FlightDetails";
import getFlights from "../requests/getFlights";

function App() {
  const [searchFlights, setSearchFlights] = useState([]);

  useEffect(() => {
    const searchFlights = fetchData(`/from/{departureCode}/to/{arrivalCode}`);
    setSearchFlights(searchFlights);
    console.log(searchFlights);
  }, []);

  return (
    <div className="App">
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
