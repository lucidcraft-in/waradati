import React from 'react'

import NavBar from '../Layout/NavBar';
import Slider from './Slider';
import OurProducts from './OurProducts';
import TopSellingProducts from './TopSellingProducts';
import Testimonials from './Testimonials';
import TrendingProducts from './TrendingProducts';

import Footer from '../Layout/Footer';
import shipping1 from './shipping1.jpg';
import shipping2 from './shipping2.jpg';
import shipping3 from './shipping3.jpg';

const Home =()=> {
  return (
    <div>
      <NavBar />
      <Slider />
      <div class="shipping_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_shipping">
                <div class="shipping_icone">
                  <img src={shipping1} alt="" />
                </div>
                <div class="shipping_content">
                  <h3>Free Delivery</h3>
                  <p>
                    Free shipping around the world for all <br /> orders over
                    $120
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_shipping col_2">
                <div class="shipping_icone">
                  <img src={shipping2} alt="" />
                </div>
                <div class="shipping_content">
                  <h3>Safe Payment</h3>
                  <p>
                    With our payment gateway, don’t worry <br /> about your
                    information
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_shipping col_3">
                <div class="shipping_icone">
                  <img src={shipping3} alt="" />
                </div>
                <div class="shipping_content">
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
      <div class="banner_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <figure class="single_banner">
                <div class="banner_thumb">
                  <a href="shop.html">
                    <img src="assets/img/bg/banner1.jpg" alt="" />
                  </a>
                  <div class="banner_content">
                    <h3>Big Sale Products</h3>
                    <h2>
                      Plants <br /> For Interior
                    </h2>
                    <a href="shop.html">Shop Now</a>
                  </div>
                </div>
              </figure>
            </div>
            <div class="col-lg-6 col-md-6">
              <figure class="single_banner">
                <div class="banner_thumb">
                  <a href="shop.html">
                    <img src="assets/img/bg/banner2.jpg" alt="" />
                  </a>
                  <div class="banner_content">
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
      <Testimonials />
      <TrendingProducts />
      <Footer />
    </div>
  );
}


export default Home