import React, { useEffect, useState } from 'react'
import Axios from '../../axios/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
 import Reviews from '../Common/Reviews';
 
import 'swiper/css';
import 'swiper/css/pagination';

export default function RelatedProducts({ category }) {

  const [data, setData] = useState()
  
    useEffect(() => {
  if (category) getRelatedProducts(category);
}, [category]);
  

     const getRelatedProducts =async (category) => {
    const { data } = await Axios.get(
      `/api/products/category/${category}?`
    );
setData(data.products);
    
  }
    

 
  return (
    <section className="product_area related_products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2>Related Products </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product_carousel product_column4  ">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.map((prod) => (
                <SwiperSlide>
                  <div className="col-lg-3">
                    <article className="single_product">
                      <figure>
                        <div className="product_thumb">
                          <a className="primary_img">
                            <img
                              src={`${
                                prod.product_items &&
                                prod.product_items[0].images[0].url
                              } `}
                              alt=""
                            />
                          </a>
                          <div className="label_product">
                            <span className="label_sale">
                              AED {prod.price - prod.sellingPrice}{' '}
                              <span className="saved">you saved</span>
                            </span>
                          </div>
                        </div>
                        <figcaption className="product_content">
                          <div className="product_rating">
                            <Reviews
                              rating={
                                prod.product_items &&
                                prod.product_items[0].rating
                              }
                            />
                          </div>
                          <h4 className="product_name">
                            <Link to={`/product/${prod.product}`}>
                              {' '}
                              {prod.product_items && prod.product_items[0].name}
                            </Link>
                          </h4>
                          <div className="price_box">
                            <span className="current_price">
                              AED {prod.sellingPrice}
                            </span>
                            <span className="old_price">AED {prod.price}</span>
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
    </section>
  );
}
