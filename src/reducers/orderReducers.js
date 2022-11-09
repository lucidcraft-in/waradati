import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    
} from '../constants/orderConstants';

export const orderListReducer = (state = { orderLists: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true, orderLists: [] };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orderLists: action.payload, };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload, };
            default:
                return state;
    }
}

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload, };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload, };
        default:
            return state;
    }
}