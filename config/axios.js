import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/EnefSaenz/PortfolioDB/",
});

export default axiosClient;
