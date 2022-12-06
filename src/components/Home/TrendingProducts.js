import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

import { trendingProductsAction } from '../../actions/homePageActions';
 import Reviews from '../Common/Reviews';

import 'swiper/css';
import 'swiper/css/pagination';

import './products.css';

const TendingProducts = () => {
  

    const dispatch = useDispatch();

    const trendingProductsList = useSelector(
      (state) => state.trendingProductsList
    );
    const { loading, error, trendingProducts } = trendingProductsList;

    useEffect(() => {
      dispatch(trendingProductsAction());
    }, []);
  
  console.log(trendingProducts);
 
   
  return (
    <div>
      <div className="product_area product_deals ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section_title">
                <h2>Trending Products</h2>
              </div>
            </div>
          </div>
          <div className="product_deals_container">
            <div className="row">
              <div className="product_carousel product_column5  ">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {trendingProducts?.map((product) => (
                    <SwiperSlide>
                      <div className="col-lg-3">
                        <article className="single_product">
                          <figure>
                            <div className="product_thumb">
                              <a className="primary_img">
                                <img
                                  src={`${
                                    product && product.product[0].images[0].url
                                  }`}
                                  alt=""
                                />
                              </a>
                              <div className="label_product">
                                
                                  <span className="label_sale">
                                    AED {product.price - product.sellingPrice}{' '}
                                    <span className="saved">you saved</span>
                                  </span>
                               
                              </div>
                              <div className="product_timing">
                                <div data-countdown="2022/12/15"></div>
                              </div>
                            </div>
                            <figcaption className="product_content">
                              <div className="product_rating">
                                <Reviews
                                  rating={
                                    product.product && product.product[0].rating
                                  }
                                />
                              </div>
                              <h4 className="product_name">
                                <Link
                                  to={`product/${
                                    product && product.product[0]._id
                                  }`}
                                >
                                  {product && product.product[0].name}
                                </Link>
                              </h4>
                              <div className="price_box">
                                <span className="current_price">
                                  AED {product.sellingPrice}
                                </span>
                                <span className="old_price">
                                  AED {product.price}
                                </span>
                              </div>
                            </figcaption>
                          </figure>
                        </article>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TendingProducts;