const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: `${process.env.FAKER_HOST}:${process.env.FAKER_PORT}`,
  timeout: 1000,
  withCredentials: true,
  headers: {
    "access-control-allow-origin": "*",
  },
});

module.exports = {
  axiosInstance,
};
