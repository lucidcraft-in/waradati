
import Axios from '../axios/axios';
import {
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_REQUEST,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_SUCCESS,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_FAIL,
  PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
  NEAREST_PRODUCT_REQUEST,
  NEAREST_PRODUCT_SUCCESS,
  NEAREST_PRODUCT_FAIL,
} from '../constants/productConstant';

import { logout } from './userActions';
 

export const listProductsCategory = (id) => async (
  dispatch
) => {
  try {
  
    dispatch({ type: PRODUCT_LIST_BY_CATEGORY_REQUEST });
 console.log('first', `/api/products/category/${id}`);
    const { data } = await Axios.get(
      `/api/products/category/${id}`
    );
    console.log(data);
    
   
 
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const listProductsSubCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST });

    const { data } = await Axios.get(`/api/products/subcategory/${id}?`);

    dispatch({
      type: PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
 
 

export const listProductDetails = (id) => async (dispatch) => {
  try {
   
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await Axios.get(`/api/products/${id}`);

     

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await Axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

  export const listProductsByCAtegoryPriority =
    () =>
    async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_PRIORITY_HOME_PAGE_LIST_REQUEST });

        const { data } = await Axios.get(
          `/api/products/priority`
        );

        dispatch({
          type: PRODUCT_PRIORITY_HOME_PAGE_LIST_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_PRIORITY_HOME_PAGE_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };


    export const nearestProducts = (id) => async (dispatch) => {
      try {
        dispatch({ type: NEAREST_PRODUCT_REQUEST });

        const { data } = await Axios.get(`/api/products/nearest/${id}?`);

        dispatch({
          type: NEAREST_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: NEAREST_PRODUCT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };