import Axios from '../axios/axios';
import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
} from '../constants/orderConstants';

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