import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation();
    return (
      <>
        <footer className="footer_widgets">
          <div className="footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6"></div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="widgets_container widget_menu">
                    <h3>{t('information')}</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <Link to="/about">{t('about_us')}</Link>
                        </li>
                        <li>
                          <Link to="/checkout">{t('checkout')}</Link>
                        </li>
                        <li>
                          <Link to="/contact">{t('contact_us')}</Link>
                        </li>

                        <li>
                          <Link to="/wishlist">{t('wishlist')}</Link>
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
                          <a href="#">{t('ubiquity')}</a>
                        </li>
                        <li>
                          <a href="#">{t('global_Reach')}</a>
                        </li>
                        <li>
                          <a href="#">{t('interactivity')}</a>
                        </li>
                        <li>
                          <a href="#">{t('richness')}</a>
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
                    <h3>{t('my_account')}</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <Link to="/account">{t('my_account')}</Link>
                        </li>
                        <li>
                          <Link to="/contact">{t('contact_us')}</Link>
                        </li>
                        <li>
                          <Link to="/cart">{t('shopping_cart')}</Link>
                        </li>
                        <li>
                          <Link to="/checkout">{t('checkout')}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widgets_container widget_menu">
                    <h3>{t('customer_service')}</h3>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <a href="#">{t('contact_us')}</a>
                        </li>
                        <li>
                          <a href="#">{t('terms')}</a>
                        </li>
                        <li>
                          <a href="#">{t('privacy')}</a>
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
