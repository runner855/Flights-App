import React from "react";
import PropTypes from "prop-types";
import "../styles/FlightsResults.css";

const FlightsResults = ({ results }) => {
  if (!results) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((parsedResults) => (
          <array
            data-testid="space-pic"
            className="card-img"
            src={parsedResults}
            alt="space-img"
          />
        ))}
      </>
    );
  }
};

FlightsResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default FlightsResults;
