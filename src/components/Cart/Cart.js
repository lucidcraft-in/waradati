import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartListByUser, removeCart } from '../../actions/cartActions';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default function Cart({ history }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cartLists);
  const { loading, error, cartLists } = cartList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cartDelete = useSelector((state) => state.cartDelete);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartShipping, setShippingAmount] = useState(0);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: success,
  } = cartDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    if (success) {
      navigate('/cart');
    }
    if (!cartLists) dispatch(cartListByUser(userInfo?._id));

    cartTotalFunc();
  }, [dispatch, history, userInfo, success, cartLists]);

  const deleteHandler = (id, itemId) => {
    if (window.confirm('Are you sure')) {
      dispatch(removeCart({ id, itemId }));
    }
  };

  const cartTotalFunc = () => {
  
  
    let subTotal = 0;

    if (cartLists?.item?.length > 0) {
      cartLists.item.map((cart) => {
        subTotal = subTotal + cart.quantity * cart.sellingPrice;
      });
      setCartSubTotal(subTotal);
      setShippingAmount(0);
      setCartTotal(subTotal+cartShipping);
    }
  };
 

  return (
    <div>
      {' '}
      <NavBar />
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>Shopping cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shopping_cart_area mt-100">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="cart_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Quantity</th>
                          <th className="product_total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartLists?.item?.length > 0 ? (
                          cartLists.item?.map((cart) => (
                            <CartItem cartLists={cartLists} cart={cart} deleteHandler={deleteHandler} />
                          ))
                        ) : (
                          <div>
                            <p>No data</p>
                          </div>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart_submit">
                    {/* <button type="submit">update cart</button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon_area">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  {/* <div className="coupon_code left">
                    <h3>Coupon</h3>
                    <div className="coupon_inner">
                      <p>Enter your coupon code if you have one.</p>
                      <input placeholder="Coupon code" type="text" />
                      <button type="submit">Apply coupon</button>
                    </div>
                  </div> */}
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="coupon_code right">
                    <h3>Cart Totals</h3>
                    <div className="coupon_inner">
                      <div className="cart_subtotal">
                        <p>Subtotal</p>
                        <p className="cart_amount">AED { cartSubTotal}</p>
                      </div>
                      <div className="cart_subtotal ">
                        <p>Shipping</p>
                        <p className="cart_amount">
                           AED {cartShipping}
                        </p>
                      </div>
                      {/* <a href="#">Calculate shipping</a> */}

                      <div className="cart_subtotal">
                        <p>Total</p>
                        <p className="cart_amount">AED {cartTotal}</p>
                      </div>
                      <div className="checkout_btn">
                        <Link to="/checkout">Proceed to Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
