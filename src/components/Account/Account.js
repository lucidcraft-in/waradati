import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderListByUSer } from '../../actions/orderActions';
import { addressListByUser } from '../../actions/addressAction';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default function Account({ history }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderLists);

  const addressLists = useSelector((state) => state.addressLists);

  const { loading, error, orderLists } = orderList;

  const { address } = addressLists;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // console.log(orderLists);
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
  
  const logoutHandler = () => {
    dispatch(logout());
  };

  console.log(address);

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
                  <li>Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="main_content_area">
        <div className="container">
          <div className="account_dashboard">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="dashboard_tab_button">
                  <ul role="tablist" className="nav flex-column dashboard-list">
                    <li>
                      <a
                        href="#dashboard"
                        data-bs-toggle="tab"
                        className="nav-link active font-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a
                        href="#orders"
                        data-bs-toggle="tab"
                        className="nav-link font-white"
                      >
                        Orders
                      </a>
                    </li>

                    <li>
                      <a
                        href="#address"
                        data-bs-toggle="tab"
                        className="nav-link font-white"
                      >
                        Addresses
                      </a>
                    </li>

                    <li>
                      <Link
                        onClick={logoutHandler}
                        to=""
                        className="nav-link font-white"
                      >
                        Logout
                      </Link>
                      {/* <a onClick={logoutHandler} className="nav-link">
                        logout
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-9 col-lg-9">
                <div className="tab-content dashboard_content">
                  <div className="tab-pane fade show active" id="dashboard">
                    <h3>Dashboard </h3>
                    <p>
                      From your account dashboard. you can easily check &amp;
                      view your <a href="#">recent orders</a>, manage your{' '}
                      <a href="#">shipping and billing addresses</a>
                    </p>
                  </div>
                  <div className="tab-pane fade" id="orders">
                    <h3>Orders</h3>
                    <div className="table-responsive">
                      <table className="table">
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
                                <span className="success">
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
                                <Link
                                  to={`/order/${order.orderId}`}
                                  className="view"
                                >
                                  {' '}
                                  view
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-pane" id="address">
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>

                    <h4 className="billing-address">Shipping address</h4>
                    <hr />
                    {address?.map((address) => (
                      <div>
                        <p>
                          <strong>
                            {address.shippingAddress.firstName}{' '}
                            {address.shippingAddress.lastName}
                          </strong>
                        </p>
                        <address>
                          <span>
                            <strong>Address:</strong>{' '}
                            {address.shippingAddress.address1}
                          </span>
                          , <br />
                          <span>
                            <strong>Appartment:</strong>{' '}
                            {address.shippingAddress.apartment}
                          </span>
                          , <br />
                          <span>
                            <strong>City:</strong>{' '}
                            {address.shippingAddress.city}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>State:</strong>{' '}
                            {address.shippingAddress.region}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>ZIP:</strong> {address.shippingAddress.zip}
                          </span>
                          ,
                          <br />
                          <span>
                            <strong>Country:</strong>{' '}
                            {address.shippingAddress.country}
                          </span>
                        </address>
                        <hr />
                      </div>
                    ))}
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
