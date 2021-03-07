import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import getFlights from "../requests/getFlights";

const accessToken = "1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj";
const apiUrl = "https://recruitment.shippypro.com/flight-engine/api/flights";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    method: `application/json`,
    Authorization: `Bearer ${accessToken}`,
  },
});

const initialState = {
  fields: {
    departureAirportId: "VCE",
    arrivalAirportId: "PSA",
    airlineId: 3,
    price: 330.22,
  },
};

const SearchFlights = ({ setFlightsResults }) => {
  const [fields, setFields] = useState(initialState.fields);
  const [value, onChange] = useState(new Date());

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFlightsResults(await getFlights(fields));

    return authAxios
      .get(`/from/${fields.departureAirportId}/to/${fields.arrivalAirportId}`, {
        fields,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="prop" value="getFlights">
      <form onSubmit={handleSubmit}>
        <div className="departureAirportId">
          From :
          <label htmlFor="departureAirportId">
            <select
              id="departureAirportId"
              name="departureAirportId"
              value={fields.departureAirportId}
              onChange={handleFieldChange}
            >
              <option value="PSA">Pisa</option>
              <option value="BLQ">Bologna</option>
              <option value="BGY">Bergamo</option>
              <option value="MXP">Milano</option>
              <option value="VCE">Venice</option>
              <option value="FCO">Rome</option>
              <option value="PSR">Pescara</option>
              <option value="NAP">Napoli</option>
              <option value="BRI">Bari</option>
              <option value="BDS">Brindisi</option>
              <option value="SUF">Lamezia Terme</option>
              <option value="CTA">Catania</option>
              <option value="PMO">Palermo</option>
              <option value="NRT">Tokyo</option>
              <option value="KLX">Kalamata</option>
              <option value="ALA">Almaty</option>
              <option value="PEK">Topeka, KS</option>
            </select>
          </label>
        </div>
        <div className="arrivalAirportId">
          To:
          <label htmlFor="arrivalAirportId" name="From">
            <select
              id="arrivalAirportId"
              name="arrivalAirportId"
              value={fields.arrivalAirportId}
              onChange={handleFieldChange}
            >
              <option value="PSA">Pisa</option>
              <option value="BLQ">Bologna</option>
              <option value="BGY">Bergamo</option>
              <option value="MXP">Milano</option>
              <option value="VCE">Venice</option>
              <option value="FCO">Rome</option>
              <option value="PSR">Pescara</option>
              <option value="NAP">Napoli</option>
              <option value="BRI">Bari</option>
              <option value="BDS">Brindisi</option>
              <option value="SUF">Lamezia Terme</option>
              <option value="CTA">Catania</option>
              <option value="PMO">Palermo</option>
              <option value="NRT">Tokyo</option>
              <option value="KLX">Kalamata</option>
              <option value="ALA">Almaty</option>
              <option value="PEK">Topeka, KS</option>
            </select>
          </label>
        </div>
        <div>
          When:
          <DatePicker className="date-slct" onChange={onChange} value={value} />
        </div>
        <button type="submit">Find!</button>
      </form>
    </div>
  );
};

SearchFlights.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      departureAirportId: PropTypes.string.isRequired,
      arrivalAirportId: PropTypes.string.isRequired,
      airlineId: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  setFlightsResults: PropTypes.func.isRequired,
};

export default SearchFlights;
