import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

export default function Slider() {

  useEffect(() => {
    console.log($('.slider_area'));
      setTimeout(function () {
          $('.slider_area').owlCarousel({
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            dots: true,
            navText: [
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>',
            ],
          });
      }, 2000);
 

 
  }, [])
  
   const carousel = useRef(null);


  return (
    <section class="slider_section">
      <div class="slider_area owl-carousel" ref={carousel}>
        <div
          class="single_slider d-flex align-items-center"
          data-bgimg="assets/img/slider/slider1.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="slider_content">
                  <h1>BIG SALE</h1>
                  <p>
                    Discount <span>20% Off </span> For Lukani Members{' '}
                  </p>
                  <a class="button" href="shop.html">
                    Discover Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single_slider d-flex align-items-center"
          data-bgimg="assets/img/slider/slider2.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="slider_content">
                  <h1>TOP SALE</h1>
                  <p>
                    Discount <span>20% Off </span> For Lukani Members{' '}
                  </p>
                  <a class="button" href="shop.html">
                    Discover Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single_slider d-flex align-items-center"
          data-bgimg="assets/img/slider/slider3.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="slider_content">
                  <h1>Lovely Plants </h1>
                  <p>
                    Discount <span>20% Off </span> For Lukani Members{' '}
                  </p>
                  <a class="button" href="shop.html">
                    Discover Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
