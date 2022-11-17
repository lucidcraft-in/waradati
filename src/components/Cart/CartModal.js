import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';

const CartModal =({
  cartModalActive,
  cartLists,
  setActiveModal,
  deleteHandler,
}) => {

    const [cartSubTotal, setCartSubTotal] = useState(0);
      const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
      cartTotalFunc();
    }, [cartLists]);

     const cartTotalFunc = () => {
       let subTotal = 0;

       if (cartLists?.item?.length > 0) {
         cartLists.item.map((cart) => {
           subTotal = subTotal + cart.quantity * cart.sellingPrice;
         });
         setCartSubTotal(subTotal);
         setCartTotal(subTotal);
       }
     };
    
  return (
    <div className={`mini_cart ${cartModalActive}`}>
      <div className="cart_gallery ">
        <div className="cart_close">
          <div className="cart_text">
            <h3>cart</h3>
          </div>
          <div className="mini_cart_close">
            <a onClick={(e) => setActiveModal('')}>
              <i className="icon-x"></i>
            </a>
          </div>
        </div>
        <div className="cart-div-height">
          {cartLists?.item?.length > 0 ? (
            cartLists.item?.map((cart) => (
              <div className="cart_item">
                <div className="cart_img">
                  <a href="#">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${cart.image}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="cart_info">
                  <a href="#">{cart.itemName}</a>
                  <p>
                    {cart.quantity} x <span> AED {cart.sellingPrice} </span>
                  </p>
                </div>
                <div className="cart_remove">
                  <a href="#">
                    <i
                      className="icon-x"
                      onClick={() => deleteHandler(cartLists._id, cart.itemId)}
                    ></i>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>Your Cart is Empty</p>
            </div>
          )}
        </div>
      </div>
      <div className="mini_cart_table">
        <div className="cart_table_border">
          <div className="cart_total">
            <span>Sub total:</span>
            <span className="price">AED {cartSubTotal}</span>
          </div>
          <div className="cart_total mt-10">
            <span>total:</span>
            <span className="price">AED {cartTotal}</span>
          </div>
        </div>
      </div>
      <div className="mini_cart_footer">
        <div className="cart_button">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i> View cart
          </Link>
        </div>
        <div className="cart_button">
          <Link className="active" to="/checkout">
            <i className="fa fa-sign-in"></i>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}


export default CartModal;