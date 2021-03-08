import React, { useState, useEffect } from "react";
import "../styles/App.css";
import SearchFlights from "./SearchFlights";
import getFlights from "../requests/getFlights";
import FlightsResults from "./FlightsResults";
import FlightDetails from "./FlightDetails";

function App() {
  const [searchFlights, setSearchFlights] = useState([]);

  useEffect(() => {
    getFlights(`/all`)
      .then((response) => {
        console.log(response);
        setSearchFlights(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(searchFlights);
  }, []);

  return (
    <div className="App">
      <h2>Where do you want to go today?</h2>

      <div className="page">
        <div className="content">
          <SearchFlights setSearchFlights={setSearchFlights} />
        </div>
        <div className="results-container">
          <div className="flight-results">
            <FlightsResults results={searchFlights} />

            <FlightDetails FlightDetails={FlightDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
