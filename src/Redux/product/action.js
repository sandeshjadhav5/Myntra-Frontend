import * as types from "./types";
import axios from "axios";

//Get all products
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: types.ALL_PRODUCT_REQUEST });
    const data = await axios.get(
      "https://myntra-backend-api.onrender.com/product"
    );
    dispatch({ type: types.ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: types.ALL_PRODUCT_ERROR,
      payload: error.response.data.message,
    });
  }
};

//Get product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST });
    const data = await axios.get(
      `https://myntra-backend-api.onrender.com/product/${id}`
    );
    dispatch({
      type: types.PRODUCT_DETAILS_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    dispatch({
      type: types.PRODUCT_DETAILS_ERROR,
      payload: error.response.data.message,
    });
  }
};
