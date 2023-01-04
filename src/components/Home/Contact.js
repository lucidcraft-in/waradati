import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Contact() {

  const { t } = useTranslation();
  

  return (
    <div>
      <NavBar />
      <Breadcrumb />
      <div>
        {/* =====map======= */}
        <div className="contact_map mt-100">
          <div className="map-area">{/* <div id="googleMap"></div> */}</div>
        </div>
        {/* ======== */}

        <div className="contact_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="contact_message content">
                  <h3>{t('contact_us')}</h3>

                  <ul>
                    <li>
                      <i className="fa fa-fax"></i> {t('dubai')}
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>{' '}
                      <a href="tel:+971 52 450 0355">+971 52 450 0355</a>{' '}
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>

                      <a href="#">wardathi@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
