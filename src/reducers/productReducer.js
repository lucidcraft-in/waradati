import {
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_REQUEST,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_SUCCESS,
  PRODUCT_PRIORITY_HOME_PAGE_LIST_FAIL,
  PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
  NEAREST_PRODUCT_REQUEST,
  NEAREST_PRODUCT_SUCCESS,
  NEAREST_PRODUCT_FAIL,
} from '../constants/productConstant.js';

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

export const productListSubCategoryReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_BY_SUB_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

  export const productDetailsReducer = (
    state = { product: {} },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};
  

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};


export const productByCategoryPriorityHomeListReducer = (state = { productsHome: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PRIORITY_HOME_PAGE_LIST_REQUEST:
      return { loading: true, productsHome: [] };
    case PRODUCT_PRIORITY_HOME_PAGE_LIST_SUCCESS:
      return {
        loading: false,
        productsHome: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_PRIORITY_HOME_PAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const nearestProductsReducer = (state = { nearestPr: [] }, action) => {
  switch (action.type) {
    case NEAREST_PRODUCT_REQUEST:
      return { loading: true, nearestPr: [] };
    case NEAREST_PRODUCT_SUCCESS:
      return {
        loading: false,
        nearestPr: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case NEAREST_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};