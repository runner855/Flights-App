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
    return authAxios
      .get(`/all`)
      .then((response) => {
        const dataResults = response.data.data[0].airlineId;
        const parsedResults = dataResults.toString();
        return parsedResults;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
/*try {
    const response = await authAxios.get(`/all`);

    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};*/
export default getFlights;
