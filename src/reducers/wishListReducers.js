import {
    WISHLIST_REQUEST,
    WISHlIST_SUCCESS,
    WISHLIST_FAIL,
     
} from '../constants/constant.js';
  
export const wishListReducer = (state = { wishlists: [] }, action) => {
    switch (action.type) {
      case WISHLIST_REQUEST:
        return { loading: true, wishlists: [] };
      case WISHlIST_SUCCESS:
        return {
          loading: false,
          wishlists: action.payload.wishlists,
        //   pages: action.payload.pages,
        //   page: action.payload.page,
        };
      case WISHLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };