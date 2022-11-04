import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import {
//   productListReducer,
//   productDetailsReducer,
//   productDeleteReducer,
//   productCreateReducer,
//   productUpdateReducer,
//   productReviewCreateReducer,
//   productTopRatedReducer,
//   productHomeListReducer,
//   relatedProductsReducer,
// } from './reducers/productReducers';
// import { cartReducer } from './reducers/cartReducers'

// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
//   userListReducer,
//   userDeleteReducer,
//   userUpdateReducer,
// } from './reducers/userReducers'
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
//   orderDeliverReducer,
//   orderListMyReducer,
//   orderListReducer,
//   orderShippedReducer,
// } from './reducers/orderReducers';
// import {
//   promotionListReducer,
//   promotionDetailsReducer,
//   promotionDeleteReducer,
//   promotionCreateReducer,
//   promotionUpdateReducer,
// } from './reducers/promotionReducer';
// import {
//   subCategoriesListReducer,
//   subCategoryDetailsReducer,
//   subCategoryDeleteReducer,
//   subCategoryCreateReducer,
//   subCategoryUpdateReducer,
// } from './reducers/subCategoryReducer';

import { homePageCategoryListReducer } from './reducers/homePageReducer';
import {
  categoryListReducer,
 
} from './reducers/categoryReducers';


// import {
//   stockListReducer,
//   stockCreateReducer,
//   stockUpdateReducer,
//   stockDetailsReducer,
//   stockDeleteReducer,
//   stockDetailsReducerByProduct,
// } from './reducers/stockReducer';

// import {
//   bannerListReducer,
//   bannerCreateReducer,
//   bannerDeleteReducer,
//   bannerDetailsReducer,
//   bannerUpdateReducer,
// } from './reducers/bannerReducer';

const reducer = combineReducers({
  homePageCategory: homePageCategoryListReducer,
  categoryList: categoryListReducer,
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
