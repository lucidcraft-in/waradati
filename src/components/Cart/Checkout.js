import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

 import { addressListByUser, addAddress } from '../../actions/addressAction';
import { cartListByUser } from '../../actions/cartActions';
import { createOrder } from '../../actions/orderActions';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';

const Checkout = () => {

    const dispatch = useDispatch();
    
     const userLogin = useSelector((state) => state.userLogin);
        const { userInfo } = userLogin;

    
  const addressLists = useSelector((state) => state.addressLists);
    const { address } = addressLists;

      const cartList = useSelector((state) => state.cartLists);
      const {    cartLists } = cartList;
    
     const [cartAmount, setCartSubTotal] = useState(0);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();
    
    const [selectedAddress, setSelectedAddress] = useState({});
  const [setCalculateTotal, setCalculateTotalFn] = useState(false);
  
    useEffect(() => {
       
        dispatch(addressListByUser(userInfo._id));
        dispatch(cartListByUser(userInfo._id));

        cartTotalFunc();
      
    }, [userInfo]);


    console.log(cartLists.userId);

    const addAddress_ = (e) => {
        e.preventDefault();
        
        const shippingAddress = {
          firstName,
          lastName,
          address1,
          address2,
          apartment,
          city,
          phone,
          zip,
        };

        const data = {
          shippingAddress: shippingAddress,
          billingAddress: shippingAddress,
          user: userInfo._id,
        };
             dispatch(addAddress(data));
    }

 

      const cartTotalFunc = () => {
        let subTotal = 0;

        if (cartLists.item?.length > 0) {
          cartLists.item.map((cart) => {
            subTotal = subTotal + cart.quantity * cart.sellingPrice;
          });
          setCartSubTotal(subTotal);
           
           
        }
      };
    
    
    const placeOrder = (e) => {

      e.preventDefault();
      
      
        
       

        let data = {
          userId: userInfo._id,
          orderItems: cartLists?.item,
          shippingAddress: selectedAddress,
          paymentMethod: 1,
          totalPrice: cartAmount,
          isPaid: false,
          isShipped: true,
          isDelivered: false,
          addressId: selectedAddress._id,
        };

          dispatch(createOrder(data));
  }
  
  if (cartLists._id != undefined && setCalculateTotal === false) {
    setCalculateTotalFn(true);
     cartTotalFunc();
  }  
  console.log(selectedAddress);
  return (
    <div>
      {' '}
      <NavBar />
      <Breadcrumb />
      <div class="Checkout_section  mt-100" id="accordion">
        <div class="container">
          <div class="checkout_form">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <form>
                  <h3>DELIVERY ADDRESS</h3>
                  <div class="payment_method">
                    {address?.shippingAddress?.map((address) => (
                      <div class="panel-default">
                        <div className="row">
                          <div className="col-1">
                            {' '}
                            <input
                              type="radio"
                              onChange={(e) => setSelectedAddress(address)}
                            />{' '}
                          </div>
                          <div className="col-8">
                            <b>
                              {' '}
                              {address.firstName} &nbsp; {address.lastName}{' '}
                            </b>
                            <br />
                            {address.address1} &nbsp; {address.address2} <br />
                            {address.apartment} &nbsp; {address.city} <br />
                            {address.phone}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div class="row mt-3">
                    <div class="col-12 mb-20">
                      <label
                        class="righ_0"
                        for="address"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetwo"
                        aria-controls="collapseOne"
                      >
                        ADD A NEW ADDRESS
                      </label>

                      <div
                        id="collapsetwo"
                        class="collapse one"
                        data-parent="#accordion"
                      >
                        <div class="row mt-3">
                          <div class="col-lg-6 mb-20">
                            <label>
                              First Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div class="col-lg-6 mb-20">
                            <label>
                              Last Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>

                          <div class="col-12 mb-20">
                            <label>
                              Street address <span>*</span>
                            </label>
                            <input
                              placeholder="Flat No"
                              type="text"
                              name="address1"
                              value={address1}
                              onChange={(e) => setAddress1(e.target.value)}
                            />
                          </div>
                          <div class="col-12 mb-20">
                            <input
                              placeholder="Floor No & Building No"
                              type="text"
                              name="address2"
                              value={address2}
                              onChange={(e) => setAddress2(e.target.value)}
                            />
                          </div>
                          <div class="col-12 mb-20">
                            <label>
                              Makani No <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="apartment"
                              value={apartment}
                              onChange={(e) => setApartment(e.target.value)}
                            />
                          </div>
                          <div class="col-12 mb-20">
                            <label>
                              Emirate <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div class="col-lg-6 mb-20">
                            <label>
                              Phone<span>*</span>
                            </label>
                            <input
                              type="number"
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div class="col-lg-6 mb-20">
                            <label>
                              ZIP<span>*</span>
                            </label>
                            <input
                              type="number"
                              name="zip"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="order_button">
                          <button onClick={(e) => addAddress_(e)}>
                            SAVE AND DELIVER HERE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="order-notes">
                        <label for="order_note">Order Notes</label>
                        <textarea
                          id="order_note"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 col-md-6">
                <form  >
                  <h3>Your order</h3>
                  <div class="order_table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {' '}
                            Price{' '}
                            <strong> ({cartLists.item?.length} Items) </strong>
                          </td>
                          <td> AED&nbsp;{cartAmount}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Shipping</th>
                          <td>
                            <strong>-</strong>
                          </td>
                        </tr>
                        <tr class="order_total">
                          <th>Order Total</th>
                          <td>
                            <strong> AED&nbsp;{cartAmount}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div class="payment_method">
                    <div class="panel-default">
                      <input
                        id="payment"
                        name="check_method"
                        type="radio"
                        checked={true}
                      />
                      <label
                        for="payment"
                        data-bs-toggle="collapse"
                        data-bs-target="#method"
                        aria-controls="method"
                      >
                        C O D [ COD only available now]
                      </label>
                    </div>
                    <div class="panel-default">
                      <input
                        id="payment_defult"
                        name="check_method"
                        type="radio"
                        disabled={true}
                      />
                      <label
                        for="payment_defult"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsedefult"
                        aria-controls="collapsedefult"
                      >
                        PayPal <img src="assets/img/icon/papyel.png" alt="" />
                      </label>

                      <div
                        id="collapsedefult"
                        class="collapse one"
                        data-parent="#accordion"
                      >
                        <div class="card-body1">
                          <p>
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="order_button mb-3">
                      <button onClick={(e) => placeOrder(e)}>Place Order</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default Checkout;