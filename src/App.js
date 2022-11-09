
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import WishList from './components/WishList/WishList';
import Account from './components/Account/Account';
import Categories from './components/Category/Categories';
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
          <Route exact path="/products" element={<Products />}></Route>
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
            path="/category/product/:id"
            element={<ProductByCategoryList />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
