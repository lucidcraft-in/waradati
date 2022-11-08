import {
  WISHLIST_REQUEST,
  WISHlIST_SUCCESS,
  WISHLIST_FAIL,
  WISHLIST_CREATE_REQUEST,
  WISHLIST_CREATE_SUCCESS,
  WISHLIST_REMOVE_REQUEST,
  WISHLIST_REMOVE_SUCCESS,
  WISHLIST_REMOVE_FAIL,
  WISHLIST_CREATE_FAIL,
  WISHLIST_CREATE_RESET,
} from '../constants/constant.js';

export const wishListReducer = (state = { wishlists: [] }, action) => {
  switch (action.type) {
    case WISHLIST_REQUEST:
      return { loading: true, wishlists: [] };
    case WISHlIST_SUCCESS:
      return {
        loading: false,
        wishlists: action.payload,
        //   pages: action.payload.pages,
        //   page: action.payload.page,
      };
    case WISHLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const wishlistCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_CREATE_REQUEST:
      return { loading: true };
    case WISHLIST_CREATE_SUCCESS:
      return { loading: false, success: true, wishlist: action.payload };
    case WISHLIST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case WISHLIST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const wishListDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_REMOVE_REQUEST:
      return { loading: true };
    case WISHLIST_REMOVE_SUCCESS:
      return { loading: false, success: true };
    case WISHLIST_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
