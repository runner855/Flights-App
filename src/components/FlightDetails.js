import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const FlightDetails = (props) => {
  const {
    date,
    departureAirportId,
    arrivalAirportId,
    airlineId,
    price,
  } = props;

  return (
    <div className="flight-details" data-testid="flight-details" key={date}>
      <div className="flight-details__date">
        Date:
        {moment(date).format("ddd Do MMM")}
      </div>
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
  date: PropTypes.number.isRequired,
  departureAirportId: PropTypes.string.isRequired,
  arrivalAirportId: PropTypes.string.isRequired,
  airlineId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FlightDetails;
