import React, { useState } from "react";
import getFlights from "../requests/getFlights";

const initialState = {
  fields: {
    departureAirportId: "VCE",
    arrivalAirportId: "PSA",
    airlineId: "Lufhansa",
    price: 330.22,
  },
};

const SearchFlights = ({ setSearchFlights }) => {
  const [fields, setFields] = useState(initialState.fields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    getFlights(
      `/from/${fields.departureAirportId}/to/${fields.arrivalAirportId}`,
      `/airlines/${fields.airlineId}`
    ).then((response) => {
      setSearchFlights(response.data.data);
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

        <button type="submit">Find!</button>
      </form>
    </div>
  );
};

export default SearchFlights;
