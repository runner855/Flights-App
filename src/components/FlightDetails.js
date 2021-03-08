import React from "react";
import PropTypes from "prop-types";

const FlightDetails = (props) => {
  const { departureAirportId, arrivalAirportId, airlineId, price } = props;

  return (
    <div className="flight-details" data-testid="flight-details">
      <div className="flight-details__departureAirportId">
        From:
        {`${departureAirportId}`}
      </div>
      <div className="flight-details__arrivalAirportId">
        To:
        {`${arrivalAirportId}`}
      </div>
      <div className="flight-details__airlineId">Airline:{`${airlineId}`}</div>
      <div className="flight-details__price">Price:{`${price}€`}</div>
    </div>
  );
};

FlightDetails.propTypes = {
  departureAirportId: PropTypes.number.toString().isRequired,
  arrivalAirportId: PropTypes.string.isRequired,
  airlineId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FlightDetails;
