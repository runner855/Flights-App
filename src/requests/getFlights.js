import axios from "axios";

const accessToken = "1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj";
const apiUrl = "https://recruitment.shippypro.com/flight-engine/api";
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
const getFlights = async () => {
  try {
    const response = await authAxios.get(
      `https://recruitment.shippypro.com/flight-engine/api/flights/all`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export default getFlights;
