import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
 

import {
  homePageCategoryListReducer,
  homePageBannerListReducer,
  homePageTopSellingProducts,
  homePageTrendingProducts,
  homePageCategoryByPriority,
} from './reducers/homePageReducer';
import {
  categoryListReducer,
 
} from './reducers/categoryReducers';

import {
  productListReducer,
  productDetailsReducer,
  productByCategoryPriorityHomeListReducer,
  nearestProductsReducer,
  productListSubCategoryReducer,
} from './reducers/productReducer';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  
} from './reducers/userReducers';
import { wishListReducer, wishlistCreateReducer, wishListDeleteReducer, } from './reducers/wishListReducers'
import { cartListReducer, cartCreateReducer, cartDeleteReducer, } from './reducers/cartReducers';
import { orderListReducer, orderCreateReducer,orderDetailsReducer } from './reducers/orderReducers';
 
import { addressListReducers, addressCreateReducer, addressRemoveReducer } from './reducers/addressReducers';

const reducer = combineReducers({
  homePageCategory: homePageCategoryListReducer,
  bannerList: homePageBannerListReducer,
  topSellingProduct: homePageTopSellingProducts,
  trendingProductsList: homePageTrendingProducts,
  categoryByPriorities :homePageCategoryByPriority,

  categoryList: categoryListReducer,

  productList: productListReducer,
  productListSubCategory : productListSubCategoryReducer,
  productDetails: productDetailsReducer,
  productHome: productByCategoryPriorityHomeListReducer,
  nearestProduct :nearestProductsReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,

  wishlists: wishListReducer,
  wishLishCreate: wishlistCreateReducer,
  wishListDelete: wishListDeleteReducer,
  
  cartLists: cartListReducer,
  cartCreate: cartCreateReducer,
  cartDelete: cartDeleteReducer,

  orderLists: orderListReducer,
  orderCreate :orderCreateReducer,
  orderDetails: orderDetailsReducer,

  addressLists: addressListReducers,
  addressCreate: addressCreateReducer,
  addressDelete: addressRemoveReducer,
});
 


const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
