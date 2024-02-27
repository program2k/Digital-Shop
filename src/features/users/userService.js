import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);

  if (response.data) {
    return response.data;
  }
};

const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);

  if (response.data) {
    return response.data;
  }
};

const favouriteList = async () => {
  const response = await axios.get(`${base_url}user/favourite`);

  if (response.data) {
    return response.data;
  }
};

const removeFavourite = async (productId) => {
  const response = await axios.delete(`${base_url}user/favourite/${productId}`);

  if (response.data) {
    return response.data;
  }
};

const addToCart = async (data) => {
  const response = await axios.post(`${base_url}user/cart`, data);

  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`);

  if (response.data) {
    return response.data;
  }
};

const updateCart = async (productId, quantity) => {
  const response = await axios.put(`${base_url}user/cart/${productId}`, {
    quantity,
  });

  if (response.data) {
    return response.data;
  }
};

const removeCart = async (productId) => {
  const response = await axios.delete(`${base_url}user/cart/${productId}`);

  if (response.data) {
    return response.data;
  }
};

export const authService = {
  registerUser,
  loginUser,
  favouriteList,
  removeFavourite,
  addToCart,
  getCart,
  updateCart,
  removeCart,
};
