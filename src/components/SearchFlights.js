import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const initialState = {
  fields: {
    departureAirportId: "",
    arrivalAirportId: "",
    price: 300.2,
  },
};

const accessToken = "1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj";
const apiUrl = "https://recruitment.shippypro.com/flight-engine/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const SearchFlights = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [value, onChange] = useState(new Date());

  const handleFindFlights = (event) => {
    event.preventDefault();

    return authAxios
      .get(
        `https://recruitment.shippypro.com/flight-engine/api/flights/from/{departureCode}/to/{arrivalCode}`,
        {
          fields,
        }
      )
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
      <form onSubmit={handleFindFlights}>
        <div className="departureAirport">
          <label htmlFor="departureAirport">
            <select
              id="departureAirport"
              name="departureAirport"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="PSA">PSA</option>
              <option value="BLQ">BLQ</option>
              <option value="BGY">BGY</option>
              <option value="MXP">MXP</option>
              <option value="VCE">VCE</option>
              <option value="FCO">FCO</option>
              <option value="PSR">PSR</option>
              <option value="NAP">NAP</option>
              <option value="BRI">BRI</option>
              <option value="BDS">BDS</option>
              <option value="SUF">SUF</option>
              <option value="CTA">CTA</option>
              <option value="PMO">PMO</option>
              <option value="NRT">NRT</option>
              <option value="KLX">KLX</option>
              <option value="ALA">ALA</option>
              <option value="PEK">PEK</option>
            </select>
          </label>
        </div>
        <div className="arrivalAirport">
          <label htmlFor="arrivalAirport">
            <select
              id="arrivalAirport"
              name="arrivalAirport"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="PSA">PSA</option>
              <option value="BLQ">BLQ</option>
              <option value="BGY">BGY</option>
              <option value="MXP">MXP</option>
              <option value="VCE">VCE</option>
              <option value="FCO">FCO</option>
              <option value="PSR">PSR</option>
              <option value="NAP">NAP</option>
              <option value="BRI">BRI</option>
              <option value="BDS">BDS</option>
              <option value="SUF">SUF</option>
              <option value="CTA">CTA</option>
              <option value="PMO">PMO</option>
              <option value="NRT">NRT</option>
              <option value="KLX">KLX</option>
              <option value="ALA">ALA</option>
              <option value="PEK">PEK</option>
            </select>
          </label>
        </div>
        <div>
          <DatePicker onChange={onChange} value={value} />
        </div>
        <button type="submit">Find!</button>
      </form>
    </div>
  );
};

export default SearchFlights;
