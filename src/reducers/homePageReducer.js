import {
  HOME_PAGE_CATEGORY_LIST_REQUEST,
  HOME_PAGE_CATEGORY_LIST_SUCCESS,
  HOME_PAGE_CATEGORY_LIST_FAIL,
  HOME_PAGE_BANNER_REQUEST,
  HOME_PAGE__BANNER_LIST_SUCCESS,
  HOME_PAGE_BANNER_LIST_FAIL,
} from '../constants/constant.js';

export const homePageCategoryListReducer = (state = { homePageCategories: [] }, action) => {
  switch (action.type) {
    case HOME_PAGE_CATEGORY_LIST_REQUEST:
      return { loading: true, homePageCategories: [] };
    case HOME_PAGE_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        homePageCategories: action.payload.categories,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case HOME_PAGE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const homePageBannerListReducer = (
  state = { banners: [] },
  action
) => {
  switch (action.type) {
    case HOME_PAGE_BANNER_REQUEST:
      return { loading: true, banners: [] };
    case HOME_PAGE__BANNER_LIST_SUCCESS:
      return {
        loading: false,
        banners: action.payload.banners,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case HOME_PAGE_BANNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
