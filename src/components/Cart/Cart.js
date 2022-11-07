import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { cartListByUser, removeCart, } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';


export default function Cart({ history }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const cartList = useSelector((state) => state.cartLists);
  const { loading, error, cartLists } = cartList;
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [quantity, setQuantity] = useState(0);
  const cartDelete = useSelector((state) => state.cartDelete)

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: success,
  } = cartDelete

  useEffect(() => {

   
    if (!userInfo) {
    
      navigate('/login');
    }

    if (success) {
      navigate('/cart');
    }
 
      dispatch(cartListByUser(userInfo._id))

  }, [
    dispatch,
    history,
    userInfo,
    success
   
  ])
  const deleteHandler = (id,itemId) => {

    if (window.confirm('Are you sure')) {
      dispatch(removeCart({id,itemId}))
  
      
    }
    
   
  }
  return (
    <div>
      {' '}
      <NavBar />
      <div class="breadcrumbs_area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_content">
                <ul>
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>shop right sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shopping_cart_area mt-100">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-12">
                <div class="table_desc">
                  <div class="cart_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th class="product_remove">Delete</th>
                          <th class="product_thumb">Image</th>
                          <th class="product_name">Product</th>
                          <th class="product-price">Price</th>
                          <th class="product_quantity">Quantity</th>
                          <th class="product_total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        { cartLists.item?.length>0? cartLists.item?.map((cart) => (
                           <tr>
                           <td class="product_remove">
                             <a href="#">
                               <i class="fa fa-trash-o" onClick={() => deleteHandler(cartLists._id, cart.itemId)}></i>
                             </a>
                           </td>
                           <td class="product_thumb">
                             <a href="#">
                               <img
                                 src={`${process.env.REACT_APP_API_URL}/${cart.image}`}
                                 alt=""
                               />
                             </a>
                           </td>
                           <td class="product_name">
                              <a href="#">{ cart.itemName}</a>
                           </td>
                           <td class="product-price">AED {cart.sellingPrice}</td>
                           <td class="product_quantity">
                             <label>Quantity</label>{' '}
                             <input min="1" max="100" value={cart.quantity} type="number" onChange={(e) => setQuantity(e.target.value)}/>
                           </td>
                            <td class="product_total">AED { cart.sellingPrice* cart.quantity}</td>
                         </tr>
 
              
                        )) : (<div>
                            <p>No data</p>
                        </div>)}
                       
                      </tbody>
                    </table>
                  </div>
                  <div class="cart_submit">
                    <button type="submit">update cart</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="coupon_area">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="coupon_code left">
                    <h3>Coupon</h3>
                    <div class="coupon_inner">
                      <p>Enter your coupon code if you have one.</p>
                      <input placeholder="Coupon code" type="text" />
                      <button type="submit">Apply coupon</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="coupon_code right">
                    <h3>Cart Totals</h3>
                    <div class="coupon_inner">
                      <div class="cart_subtotal">
                        <p>Subtotal</p>
                        <p class="cart_amount">£215.00</p>
                      </div>
                      <div class="cart_subtotal ">
                        <p>Shipping</p>
                        <p class="cart_amount">
                          <span>Flat Rate:</span> £255.00
                        </p>
                      </div>
                      <a href="#">Calculate shipping</a>

                      <div class="cart_subtotal">
                        <p>Total</p>
                        <p class="cart_amount">£215.00</p>
                      </div>
                      <div class="checkout_btn">
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
