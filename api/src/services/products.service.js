const { axiosInstance } = require("../config");

const getNewProducts = async () => {
  const products = await axiosInstance.get("/");
  return products;
};

module.exports = { getNewProducts };
