import {
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_FAIL,
} from '../constants/constant.js';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_CATEGORY_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
