import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";
export const findProducts = (reqData) => async (dispatch) => {
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
    } = reqData;

    try {
        dispatch({ type: FIND_PRODUCTS_REQUEST });
        const { data } = await api.get(
            `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        );
        console.log("get product by category - ", data);
        dispatch({
            type: FIND_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_PRODUCTS_FAILURE,
            payload: error.message,
        });
    }
};

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const {productId}=reqData;
    console.log("products by  id : ", productId);
    try {
      const { data } = await api.get(`/api/products/id/${productId}`);
      console.log("data",data)
      dispatch({
        type: FIND_PRODUCT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_ID_FAILURE,
        payload:
          error.message,
      });
    }
  };



