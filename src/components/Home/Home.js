import React from 'react'
import { useTranslation } from 'react-i18next';

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

const Home = () => {
  
  const { t } = useTranslation();
  
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
                  <h3> {t('fast_delivery')}</h3>
                  <p>{t('fast_defast_delivery_desclivery')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_shipping col_2">
                <div className="shipping_icone">
                  <img src={shipping2} alt="" />
                </div>
                <div className="shipping_content">
                  <h3>{t('safe_payment')}</h3>
                  <p>{t('safe_payment_desc')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_shipping col_3">
                <div className="shipping_icone">
                  <img src={shipping3} alt="" />
                </div>
                <div className="shipping_content">
                  <h3>{t('friendly_service')}</h3>
                  <p>{t('friendly_service_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="about_gallery_section">
        <div class="container">
            <div class="about_gallery_container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <article class="single_gallery_section">
                            <figure>
                                <div class="gallery_thumb">
                                    <img src="assets/img/about/about2.jpg" alt=""/>
                                </div>
                                <figcaption class="about_gallery_content">
                                    <h3>What do we do?</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto</p>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <article class="single_gallery_section">
                            <figure>
                                <div class="gallery_thumb">
                                    <img src="assets/img/about/about3.jpg" alt=""/>
                                </div>
                                <figcaption class="about_gallery_content">
                                    <h3>Our Mission</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto</p>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <article class="single_gallery_section">
                            <figure>
                                <div class="gallery_thumb">
                                    <img src="assets/img/about/about4.jpg" alt=""/>
                                </div>
                                <figcaption class="about_gallery_content">
                                    <h3>History Of Us</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto</p>
                                </figcaption>
                            </figure>
                        </article>
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
                  <a href="#">
                    <img src={banner1} alt="" />
                  </a>
                  <div className="banner_content">
                    <h3>{t('single_banner_1')}</h3>
                    <h2>{t('single_banner_1_desc')}</h2>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </figure>
            </div>
            <div className="col-lg-6 col-md-6">
              <figure className="single_banner">
                <div className="banner_thumb">
                  <a href="#">
                    <img src={banner2} alt="" />
                  </a>
                  <div className="banner_content">
                    <h3>{t('single_banner_2')}</h3>
                    <h2>{t('single_banner_2_desc')}</h2>
                    <a href="#">Shop Now</a>
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