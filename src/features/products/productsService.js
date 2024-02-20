import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);

  if (response.data) {
    return response.data;
  }
};

const addFavourite = async (productId) => {
  const response = await axios.post(
    `${base_url}product/favourite?${productId}`,
    {
      productId,
    }
  );

  if (response.data) {
    return response.data;
  }
};

const removeFavourite = async (productId) => {
  const response = await axios.put(`${base_url}product/favourite/${productId}`);

  if (response.data) {
    return response.data;
  }
};

export const productsService = {
  getProducts,
  addFavourite,
  removeFavourite,
};
