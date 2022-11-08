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
  
export const cartListReducer = (state = { cartLists: [] }, action) => {
    
    switch (action.type) {
      case CART_LIST_REQUEST:
        return { loading: true, cartLists: [] };
      case CART_LIST_SUCCESS:
            return {
          loading: false,
          cartLists: action.payload,
          //   pages: action.payload.pages,
          //   page: action.payload.page,
        };
      case CART_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};
  
export const cartCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CART_ADD_REQUEST:
        return { loading: true };
      case CART_ADD_SUCCESS:
        return { loading: false, success: true, cart: action.payload };
      case CART_ADD_FAIL:
        return { loading: false, error: action.payload };
      case CART_ADD_RESET:
        return {};
      default:
        return state;
    }
};
  

export const cartDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CART_REMOVE_REQUEST:
        return { loading: true };
      case CART_REMOVE_SUCCESS:
        return { loading: false, success: true };
      case CART_REMOVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };