import React from "react";
import PropTypes from "prop-types";
import "../styles/FlightsResults.css";
import FlightDetails from "./FlightDetails";

const FlightsResults = ({ results }) => {
  if (!results) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((flights) => (
          <FlightDetails key={flights.id} flights={flights} />
        ))}
      </>
    );
  }
};

FlightsResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default FlightsResults;
