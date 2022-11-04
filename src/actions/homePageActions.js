import Axios from '../axios/axios';
import {
  HOME_PAGE_CATEGORY_LIST_REQUEST,
  HOME_PAGE_CATEGORY_LIST_SUCCESS,
  HOME_PAGE_CATEGORY_LIST_FAIL,
} from '../constants/constant.js';
// import { logout } from './userActions'

export const listCategoriesHomePage = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_PAGE_CATEGORY_LIST_REQUEST });

    const { data } = await Axios.get(`/api/home/categories`);

    dispatch({
      type: HOME_PAGE_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOME_PAGE_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};