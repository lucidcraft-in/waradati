import { Form } from 'react-router-dom';
import Axios from '../axios/axios';
import {
  WISHLIST_REQUEST,
  WISHlIST_SUCCESS,
  WISHLIST_FAIL,
  WISHLIST_CREATE_REQUEST,
  WISHLIST_CREATE_SUCCESS,
  WISHLIST_CREATE_FAIL,
  WISHLIST_REMOVE_REQUEST,
  WISHLIST_REMOVE_SUCCESS,
  WISHLIST_REMOVE_FAIL,
} from '../constants/constant.js';
import { logout } from './userActions'
export const wishlIstListByUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: WISHLIST_REQUEST });
    const { data } = await Axios.get(`/api/wishlist/${id}`);
    dispatch({ type: WISHlIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addWishList = (wishList) => async (dispatch, getState) => {
  try {
    dispatch({ WISHLIST_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.post(`/api/wishlist`, wishList, config);
    dispatch({ type: WISHLIST_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: WISHLIST_CREATE_FAIL,
      payload: message,
    });
  }
};

export const removeWishList = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: WISHLIST_REMOVE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await Axios.delete(`/api/wishlist/${id}`, config);
    dispatch({ type: WISHLIST_REMOVE_SUCCESS });
  } catch (error) {
      
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: WISHLIST_REMOVE_FAIL,
      payload: message,
    });
  }
};
