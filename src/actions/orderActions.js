import Axios from '../axios/axios';
import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_CREATE_RESET
} from '../constants/orderConstants';

import { CART_CLEAR_ITEMS } from '../constants/cartConstants';

export const orderListByUSer = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await Axios.get(`/api/orders/myorders/${id}`, config);
       
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
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

    const { data } = await Axios.post(`/api/orders`, order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    
    localStorage.removeItem('cartItems');
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
    //   dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};
export const createOrderReset = (order) => async (dispatch, getState) => { 
  dispatch({
    type: ORDER_CREATE_REQUEST,
  });
}
export const getOrderById = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await Axios.get(`/api/orders/${id}`, config);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data, });

    }
    catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}
