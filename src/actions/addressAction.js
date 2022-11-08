import Axios from '../axios/axios';
import {
    ADDRESS_LIST_REQUEST,
    ADDRESS_LIST_SUCCESS,
    ADDRESS_LIST_FAIL,
    ADDRES_ADD_REQUEST,
    ADDRES_ADD_SUCCESS,
    ADDRES_ADD_FAIL,
    ADDRESS_REMOVE_REQUEST,
    ADDRESS_REMOVE_SUCCESS,
    ADDRESS_REMOVE_FAIL,
} from '../constants/addressConstants';
import { logout } from './userActions'

export const addressListByUser = (id) => async (dispatch, getState) => {
    
    try {
        dispatch({ type: ADDRESS_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await Axios.get(`/api/address/${id}`, config);
       
        dispatch({ type: ADDRESS_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ADDRESS_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const addAddress = (address) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADDRES_ADD_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
      
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await Axios.post(`/api/address`, address, config);
        dispatch({ type: ADDRES_ADD_SUCCESS, payload: data });
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
            type: ADDRES_ADD_FAIL,
            payload: message,
        });
    }
};

export const deleteAddress = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADDRESS_REMOVE_REQUEST });
        const {
            userLogin: { userInfo },
          } = getState();
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
        };
        
        await Axios.delete(`/api/address/${id}`, config);
        dispatch({ type: ADDRESS_REMOVE_SUCCESS, });
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
        type: ADDRESS_REMOVE_FAIL,
        payload: message,
      });
    }
}