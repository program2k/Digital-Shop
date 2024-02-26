import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);

  if (response.data) {
    return response.data;
  }
};

const getOnlyProduct = async (id) => {
  const response = await axios.get(`${base_url}products/${id}`);

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

const searchProduct = async (name) => {
  const response = await axios.get(`${base_url}product`, {
    params: {
      name: name,
    },
  });

  if (response.data) {
    return response.data;
  }
};

export const productsService = {
  getProducts,
  addFavourite,
  getOnlyProduct,
  searchProduct,
};
