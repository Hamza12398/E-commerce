const { default: axiosClient } = require("./axiosClient");

const getProducts = () => axiosClient.get("/products");


export default {
  getProducts,
};
