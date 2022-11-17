import Axios from '../axios/axios';
import {
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_ADD_REQUEST,
    CART_ADD_SUCCESS,
    CART_ADD_FAIL,
    CART_ADD_RESET,
    CART_REMOVE_REQUEST,
    CART_REMOVE_SUCCESS,
    CART_REMOVE_FAIL,
} from '../constants/cartConstants';
import { logout } from './userActions'

export const cartListByUser = (id) => async (dispatch, getState) => {
    try {
       
        dispatch({ type: CART_LIST_REQUEST });
   
        const {
            userLogin: { userInfo },
          } = getState();
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
        };
       
        const { data } = await Axios.get(`/api/cart/${id}`, config);
     
        dispatch({ type: CART_LIST_SUCCESS, payload: data });
       
    }
    catch (error) {
        dispatch({
            type: CART_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const addCart = (cart) => async (dispatch, getState) => { 

    try {
        dispatch({ type: CART_ADD_REQUEST });
        const {
            userLogin: { userInfo },
          } = getState();
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
        };
        
        const { data } = await Axios.post(`/api/cart`, cart, config);
      dispatch({ type: CART_ADD_SUCCESS, payload: data });
      return data;
    }
    catch (error) {
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: CART_ADD_FAIL,
        payload: message,
      });
    }
        
}

export const removeCart = (cart) => async (dispatch, getState) => { 

    try {
        dispatch({ type: CART_REMOVE_REQUEST });

        
    const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
        };
        
     await Axios.put(`/api/cart`,cart,config);
 
        dispatch({ type: CART_REMOVE_SUCCESS });
    }
    catch (error) {
        
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: CART_REMOVE_FAIL,
        payload: message,
      });
    }
}


export const checkCartItemAdded =
  ( itemId, stockId) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await Axios.get(
        `/api/cart/${userInfo._id}/${itemId}/${stockId}`,
        config
      );

      return data;
    } catch (error) {
      return error;
    }
  };
