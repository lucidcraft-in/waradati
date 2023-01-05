import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../actions/orderActions';
import { Link } from 'react-router-dom';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(order);
  useEffect(() => {
    dispatch(getOrderById(id));
  }, []);

  return (
    <div>
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
                  <li>Order </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row single-order-bg"></div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
