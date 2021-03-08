import axios from "axios";

const accessToken = "1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj";
const apiUrl = "https://recruitment.shippypro.com/flight-engine/api/flights";

const authAxios = axios.create({
  baseURL: apiUrl,

  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const getFlights = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return authAxios.get(query);
  }
};

export default getFlights;
