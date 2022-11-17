import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ImageArea({ product }) {


      const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="col-lg-6 col-md-6" style={{ textAlign: 'center' }}>
      <div className="product-details-tab">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {product?.images?.map((image) => (
            <SwiperSlide>
              <img src={`${image.url}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {product?.images?.map((image) => (
            <SwiperSlide>
              <img src={`${image.url}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div id="img-1" className="zoomWrapper single-zoom">
          <a href="#">
            <img
              id="zoom1"
              src={`${process.env.REACT_APP_API_URL}/${
                product.images && product?.images[0]?.url
              }`}
              data-zoom-image="assets/img/product/productbig4.jpg"
              alt="big-1"
            />
          </a>
        </div>
        <div className="single-zoom-thumb">
          <ul
            className="s-tab-zoom owl-carousel single-product-active"
            id="gallery_01"
          >
            <li>
              <a
                href="#"
                className="elevatezoom-gallery active"
                data-update=""
                data-image="assets/img/product/productbig4.jpg"
                data-zoom-image="assets/img/product/productbig4.jpg"
              >
                <img src="assets/img/product/productbig4.jpg" alt="zo-th-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="elevatezoom-gallery active"
                data-update=""
                data-image="assets/img/product/productbig1.jpg"
                data-zoom-image="assets/img/product/productbig1.jpg"
              >
                <img src="assets/img/product/productbig1.jpg" alt="zo-th-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="elevatezoom-gallery active"
                data-update=""
                data-image="assets/img/product/productbig2.jpg"
                data-zoom-image="assets/img/product/productbig2.jpg"
              >
                <img src="assets/img/product/productbig2.jpg" alt="zo-th-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="elevatezoom-gallery active"
                data-update=""
                data-image="assets/img/product/productbig3.jpg"
                data-zoom-image="assets/img/product/productbig3.jpg"
              >
                <img src="assets/img/product/productbig3.jpg" alt="zo-th-1" />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
