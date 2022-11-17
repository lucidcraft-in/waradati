
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Home from './components/Home/Home';

import ProductDetails from './components/ProductDetails/ProductDetails';

import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import OrderSuccess from './components/Cart/OrderSuccess';

import WishList from './components/WishList/WishList';
import Account from './components/Account/Account';
import Categories from './components/Category/Categories';

import ProductsBySubCategory from './components/Products/ProductsBySubCategory';
import ProductByCategoryList from './components/Products/ProductByCategoryList';

import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import OrderDetails from './components/Account/OrderDetails'
import Contact from './components/Home/Contact'
import AboutUs from './components/Home/AboutUs';
function App() {
  return (
    <>
      <Router>
        <Routes>
          {' '}
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/subcategory/products/:id"
            element={<ProductsBySubCategory />}
          ></Route>
          <Route exact path="/product/:id" element={<ProductDetails />}></Route>
          <Route exact path="/order/:id" element={<OrderDetails />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/wishlist" element={<WishList />}></Route>
          <Route exact path="/account" element={<Account />}></Route>
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route
            exact
            path="/category/products/:id"
            element={<ProductByCategoryList />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/order/success" element={<OrderSuccess />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
