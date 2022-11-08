
import Axios from '../axios/axios';
import {
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS
,PRODUCT_LIST_BY_CATEGORY_FAIL} from '../constants/constant';
 

export const listProductsCategory = (id) => async (
  dispatch
) => {
  try {
  
    dispatch({ type: PRODUCT_LIST_BY_CATEGORY_REQUEST });

    const { data } = await Axios.get(
      `/api/products/category/${id}?`
    );
 
   
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
 