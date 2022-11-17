import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';
import { useNavigate, Link } from 'react-router-dom';
export default function Contact() {
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
                  <h3>contact us</h3>
                  <p>
                    Beautifully sculpted and nurtured with care, our unique
                    Juniper bonsai is more than just a tree—it’s an inspired
                    work of art! One of the most popular of all bonsai
                    varieties, this exceptional evergreen provides a sense of
                    calm and serenity, and with proper attention it
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-fax"></i> Dubai
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>{' '}
                      <a href="#">wardathi@gmail.com</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>
                      <a href="tel:0123456789">0123456789</a>{' '}
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
