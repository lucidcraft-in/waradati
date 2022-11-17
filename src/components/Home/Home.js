import React from 'react'

import NavBar from '../Layout/NavBar';
import Slider from './Slider';
import OurProducts from './OurProducts';
import TopSellingProducts from './TopSellingProducts';
import Testimonials from './Testimonials';
import TrendingProducts from './TrendingProducts';

import Footer from '../Layout/Footer';
import shipping1 from './img/shipping1.jpg';
import shipping2 from './img/shipping2.jpg';
import shipping3 from './img/shipping3.jpg';

import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';

const Home =()=> {
  return (
    <div>
      <NavBar />
      <Slider />
      <div className="shipping_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src={shipping1} alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Free Delivery</h3>
                  <p>
                    Free shipping around the world for all <br /> orders over
                    $120
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_shipping col_2">
                <div className="shipping_icone">
                  <img src={shipping2} alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Safe Payment</h3>
                  <p>
                    With our payment gateway, don’t worry <br /> about your
                    information
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_shipping col_3">
                <div className="shipping_icone">
                  <img src={shipping3} alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Friendly Services</h3>
                  <p>
                    You have 30-day return guarantee for <br /> every single
                    order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <figure className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html">
                    <img src={banner1} alt="" />
                  </a>
                  <div className="banner_content">
                    <h3>Big Sale Products</h3>
                    <h2>
                      Plants <br /> For Interior
                    </h2>
                    <a href="shop.html">Shop Now</a>
                  </div>
                </div>
              </figure>
            </div>
            <div className="col-lg-6 col-md-6">
              <figure className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html">
                    <img src={banner2} alt="" />
                  </a>
                  <div className="banner_content">
                    <h3>Top Products</h3>
                    <h2>
                      Plants <br /> For Healthy
                    </h2>
                    <a href="shop.html">Shop Now</a>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <OurProducts />
      <TopSellingProducts />
      {/* <Testimonials /> */}
      <TrendingProducts />
      <Footer />
    </div>
  );
}


export default Home