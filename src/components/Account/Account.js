import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderListByUSer } from '../../actions/orderActions';
import { addressListByUser } from '../../actions/addressAction';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default function Account({ history }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderLists);

  const addressList = useSelector((state) => state.addressLists);

  const { loading, error, orderLists } = orderList;

  const { addressLists } = addressList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    // if (success) {
    //   navigate('/cart');
    // }

    dispatch(orderListByUSer(userInfo._id));
    dispatch(addressListByUser(userInfo._id));
  }, [dispatch, history, userInfo]);
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
      <section class="main_content_area">
        <div class="container">
          <div class="account_dashboard">
            <div class="row">
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="dashboard_tab_button">
                  <ul role="tablist" class="nav flex-column dashboard-list">
                    <li>
                      <a
                        href="#dashboard"
                        data-bs-toggle="tab"
                        class="nav-link active"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="#orders" data-bs-toggle="tab" class="nav-link">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        href="#downloads"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a href="#address" data-bs-toggle="tab" class="nav-link">
                        Addresses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#account-details"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Account details
                      </a>
                    </li>
                    <li>
                      <a href="login.html" class="nav-link">
                        logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-12 col-md-9 col-lg-9">
                <div class="tab-content dashboard_content">
                  <div class="tab-pane fade show active" id="dashboard">
                    <h3>Dashboard </h3>
                    <p>
                      From your account dashboard. you can easily check &amp;
                      view your <a href="#">recent orders</a>, manage your{' '}
                      <a href="#">shipping and billing addresses</a> and{' '}
                      <a href="#">Edit your password and account details.</a>
                    </p>
                  </div>
                  <div class="tab-pane fade" id="orders">
                    <h3>Orders</h3>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderLists.map((order, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>
                                {new Date(order.updatedDate).toLocaleString(
                                  'en-US',
                                  {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                  }
                                )}
                              </td>
                              <td>
                                <span class="success">
                                  {order.isDelivered === true
                                    ? ' Completed'
                                    : ' Processing'}{' '}
                                </span>
                              </td>
                              <td>
                                AED {order.data.totalAmount} for{' '}
                                {order.data.quantity} item{' '}
                              </td>
                              <td>
                                <a href="cart.html" class="view">
                                  view
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="downloads">
                    <h3>Downloads</h3>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Downloads</th>
                            <th>Expires</th>
                            <th>Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Shopnovilla - Free Real Estate PSD Template</td>
                            <td>May 10, 2018</td>
                            <td>
                              <span class="danger">Expired</span>
                            </td>
                            <td>
                              <a href="#" class="view">
                                Click Here To Download Your File
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Organic - ecommerce html template</td>
                            <td>Sep 11, 2018</td>
                            <td>Never</td>
                            <td>
                              <a href="#" class="view">
                                Click Here To Download Your File
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="address">
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <h4 class="billing-address">Billing address</h4>
                    {addressLists.billingAddress?.map((billAddress) => (
                      <div>
                        <a href="#" class="view">
                          Edit
                        </a>
                        <p>
                          <strong>
                            {billAddress.firstName} {billAddress.lastName}
                          </strong>
                        </p>
                        <address>
                          <span>
                            <strong>Address:</strong> {billAddress.address1}
                          </span>
                          , <br />
                          <span>
                            <strong>Appartment:</strong> {billAddress.apartment}
                          </span>
                          , <br />
                          <span>
                            <strong>City:</strong> {billAddress.city}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>State:</strong> {billAddress.region}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>ZIP:</strong> {billAddress.zip}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>Country:</strong> {billAddress.country}
                          </span>
                        </address>
                      </div>
                    ))}

                    <h4 class="billing-address">Shipping address</h4>
                    {addressLists.shippingAddress?.map((shippAddress) => (
                      <div>
                        <a href="#" class="view">
                          Edit
                        </a>
                        <p>
                          <strong>
                            {shippAddress.firstName} {shippAddress.lastName}
                          </strong>
                        </p>
                        <address>
                          <span>
                            <strong>Address:</strong> {shippAddress.address1}
                          </span>
                          , <br />
                          <span>
                            <strong>Appartment:</strong> {shippAddress.apartment}
                          </span>
                          , <br />
                          <span>
                            <strong>City:</strong> {shippAddress.city}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>State:</strong> {shippAddress.region}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>ZIP:</strong> {shippAddress.zip}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>Country:</strong> {shippAddress.country}
                          </span>
                        </address>
                      </div>
                    ))}
                  </div>

                  <div class="tab-pane fade" id="account-details">
                    <h3>Account details </h3>
                    <div class="login">
                      <div class="login_form_container">
                        <div class="account_login_form">
                          <form action="#">
                            <p>
                              Already have an account?{' '}
                              <a href="#">Log in instead!</a>
                            </p>
                            <div class="input-radio">
                              <span class="custom-radio">
                                <input
                                  type="radio"
                                  value="1"
                                  name="id_gender"
                                />{' '}
                                Mr.
                              </span>
                              <span class="custom-radio">
                                <input
                                  type="radio"
                                  value="1"
                                  name="id_gender"
                                />{' '}
                                Mrs.
                              </span>
                            </div>{' '}
                            <br />
                            <label>First Name</label>
                            <input type="text" name="first-name" />
                            <label>Last Name</label>
                            <input type="text" name="last-name" />
                            <label>Email</label>
                            <input type="text" name="email-name" />
                            <label>Password</label>
                            <input type="password" name="user-password" />
                            <label>Birthdate</label>
                            <input
                              type="text"
                              placeholder="MM/DD/YYYY"
                              value=""
                              name="birthday"
                            />
                            <span class="example">(E.g.: 05/31/1970)</span>
                            <br />
                            <span class="custom_checkbox">
                              <input type="checkbox" value="1" name="optin" />
                              <label>Receive offers from our partners</label>
                            </span>
                            <br />
                            <span class="custom_checkbox">
                              <input
                                type="checkbox"
                                value="1"
                                name="newsletter"
                              />
                              <label>
                                Sign up for our newsletter
                                <br />
                                <em>
                                  You may unsubscribe at any moment. For that
                                  purpose, please find our contact info in the
                                  legal notice.
                                </em>
                              </label>
                            </span>
                            <div class="save_button primary_btn default_button">
                              <button type="submit">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
