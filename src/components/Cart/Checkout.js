import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { message } from 'antd';

 import { addressListByUser, addAddress } from '../../actions/addressAction';
import { cartListByUser } from '../../actions/cartActions';
import { createOrder } from '../../actions/orderActions';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';
import SuccessModal from './SuccessModal';

const Checkout = () => {

    const dispatch = useDispatch();
    
     const userLogin = useSelector((state) => state.userLogin);
        const { userInfo } = userLogin;

    
  const addressLists = useSelector((state) => state.addressLists);
  const { address } = addressLists;
  
  const addressCreate = useSelector((state) => state.addressCreate);
  const { success, address_ } = addressCreate;

      const cartList = useSelector((state) => state.cartLists);
  const { cartLists } = cartList;
  
   const orderCreate = useSelector((state) => state.orderCreate);
   const { success: orderCreateSuccess, order } = orderCreate;
    
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
   const [selectedAddressId, setSelectedAddressId] = useState();
  const [setCalculateTotal, setCalculateTotalFn] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
   
      dispatch(addressListByUser(userInfo._id));
      dispatch(cartListByUser(userInfo._id));

      if (success === true) {
        setSelectedAddressId(address_._id);
        setSelectedAddress(address_.shippingAddress);
      }

      if (orderCreateSuccess === true) {
        setShow(true);
      }
      
      cartTotalFunc();
    }, [userInfo, success, orderCreateSuccess]);


  

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
      
       message.success('Successfully added', 3);

      // set data is empty
      setFirstName('')
      setLastName('')
      setAddress1('')
      setAddress2('')
      setApartment('')
      setCity('')
      setPhone('')
      setZip('')

     
    }

 

      const cartTotalFunc = () => {
        let subTotal = 0;

        if (cartLists?.item?.length > 0) {
          cartLists?.item.map((cart) => {
            subTotal = subTotal + cart.quantity * cart.sellingPrice;
          });
          setCartSubTotal(subTotal);
           
           
        }
      };
    
    
    const placeOrder = (e) => {

      e.preventDefault();

      if (selectedAddress.firstName === undefined) {
        message.error('Please select Delivery address', 3);
        return;
      }
      
      
       
       

        let data = {
          userId: userInfo._id,
          orderItems: cartLists?.item,
          shippingAddress: selectedAddress,
          paymentMethod: 1,
          totalPrice: cartAmount,
          isPaid: false,
          isShipped: true,
          isDelivered: false,
          addressId: selectedAddressId,
        };

          dispatch(createOrder(data));
  }
  
  if (cartLists?._id != undefined && setCalculateTotal === false) {
    setCalculateTotalFn(true);
     cartTotalFunc();
  }  

  const changeAddress = (address) => {
    setSelectedAddress(address.shippingAddress);
    setSelectedAddressId(address._id);
  }

 
  
 
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
                  <li>Checkout </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal order={order} show={show} />
      <div className="Checkout_section  mt-100" id="accordion">
        <div className="container">
          <div className="checkout_form">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <form>
                  <h3>DELIVERY ADDRESS</h3>
                  <div className="payment_method">
                    {address?.map((address, index) => (
                      <div className="panel-default">
                        <div className="row">
                          <div className="col-1">
                            {' '}
                            <input
                              type="radio"
                              id={address._id}
                              checked={
                                address._id === selectedAddressId ? true : false
                              }
                              onChange={(e) => changeAddress(address)}
                            />{' '}
                          </div>
                          <div className="col-8">
                            <b>
                              {' '}
                              {address.shippingAddress.firstName} &nbsp;{' '}
                              {address.shippingAddress.lastName}{' '}
                            </b>
                            <br />
                            {address.shippingAddress.address1} &nbsp;{' '}
                            {address.shippingAddress.address2} <br />
                            {address.shippingAddress.apartment} &nbsp;{' '}
                            {address.shippingAddress.city} <br />
                            <span className="checkout-address-phone">
                              {address.shippingAddress.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 mb-20">
                      <label
                        className="righ_0"
                        for="address"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetwo"
                        aria-controls="collapseOne"
                      >
                        ADD A NEW ADDRESS
                      </label>

                      <div
                        id="collapsetwo"
                        className="collapse one"
                        data-parent="#accordion"
                      >
                        <div className="row mt-3">
                          <div className="col-lg-6 mb-20">
                            <label>
                              First Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required={true}
                            />
                          </div>
                          <div className="col-lg-6 mb-20">
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

                          <div className="col-12 mb-20">
                            <label>
                              Street address <span>*</span>
                            </label>
                            <input
                              placeholder="Flat No"
                              type="text"
                              name="address1"
                              value={address1}
                              onChange={(e) => setAddress1(e.target.value)}
                              required={true}
                            />
                          </div>
                          <div className="col-12 mb-20">
                            <input
                              placeholder="Floor No & Building No"
                              type="text"
                              name="address2"
                              value={address2}
                              onChange={(e) => setAddress2(e.target.value)}
                            />
                          </div>
                          <div className="col-12 mb-20">
                            <label>
                              Makani No <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="apartment"
                              value={apartment}
                              onChange={(e) => setApartment(e.target.value)}
                              required={true}
                            />
                          </div>
                          <div className="col-12 mb-20">
                            <label>
                              Emirate <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              required={true}
                            />
                          </div>
                          <div className="col-lg-6 mb-20">
                            <label>
                              Phone<span>*</span>
                            </label>
                            <input
                              type="number"
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required={true}
                            />
                          </div>
                          <div className="col-lg-6 mb-20">
                            <label>
                              ZIP<span>*</span>
                            </label>
                            <input
                              type="number"
                              name="zip"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                              required={true}
                            />
                          </div>
                        </div>
                        <div className="order_button">
                          <button onClick={(e) => addAddress_(e)}>
                            SAVE AND DELIVER HERE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="order-notes">
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
              <div className="col-lg-6 col-md-6">
                <form>
                  <h3>Your order</h3>
                  <div className="order_table table-responsive">
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
                            <strong> ({cartLists?.item?.length} Items) </strong>
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
                        <tr className="order_total">
                          <th>Order Total</th>
                          <td>
                            <strong> AED&nbsp;{cartAmount}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment_method">
                    <div className="panel-default">
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
                    <div className="panel-default">
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
                        className="collapse one"
                        data-parent="#accordion"
                      >
                        <div className="card-body1">
                          <p>
                            There is only cash on delivery available at the
                            moment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="order_button m-3">
                      <button onClick={(e) => placeOrder(e)}>
                        Place Order
                      </button>
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