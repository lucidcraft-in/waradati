import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <>
        <footer className="footer_widgets">
          <div className="footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widgets_container contact_us">
                    <h3>Opening Time</h3>
                    <p>
                      <span>24 Hour</span>
                    </p>
                     
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="widgets_container widget_menu">
                    <h3>Information</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                          <Link to="/wishlist">Wishlist</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="widgets_container widget_app">
                    <div className="footer_logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo-w.png" alt="" />
                      </a>
                    </div>
                    <div className="footer_widgetnav_menu">
                      <ul>
                        <li>
                          <a href="#">Payment</a>
                        </li>
                        <li>
                          <a href="#">Affiliates</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Internet</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_app">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="assets/img/icon/icon-app.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/img/icon/icon1-app.jpg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widgets_container widget_menu">
                    <h3>My Account</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <Link to="/account">My Account</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/cart">Shopping cart</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widgets_container widget_menu">
                    <h3>Customer Service</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Terms of use</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright_area">
                    <p className="copyright-text">
                      &copy; 2022  
                      <i className="fa fa-heart text-danger"></i> by{' '}
                      <a href="https://www.luzidcraft.com/" target="_blank">
                        www.luzidcraft.com/
                      </a>{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="footer_payment">
                    <a href="#">
                      <img src="assets/img/icon/payment.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
