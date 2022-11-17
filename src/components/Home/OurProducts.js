import React,{useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import './products.css';

import SingleProduct from './SingleProduct';

import { listProductsByCAtegoryPriority } from '../../actions/productActions';

const OurProducts = () => {
  const dispatch = useDispatch();
  
  
     const productHome = useSelector((state) => state.productHome);
     const { loading, error, productsHome } = productHome;

    useEffect(() => {
      dispatch(listProductsByCAtegoryPriority());
    }, []);


  
  return (
    <div>
      {' '}
      <div className="product_area  mb-95">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product_header">
                <div className="section_title">
                  <h2>Our Products</h2>
                </div>
                <div className="product_tab_btn">
                  <ul className="nav" role="tablist" id="nav-tab">
                    <li>
                      <a
                        className="active"
                        data-bs-toggle="tab"
                        href="#plant1"
                        role="tab"
                        aria-controls="plant1"
                        aria-selected="true"
                      >
                        {productsHome[0]?.category}
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tab"
                        href="#plant2"
                        role="tab"
                        aria-controls="plant2"
                        aria-selected="false"
                      >
                        {productsHome[1]?.category}
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tab"
                        href="#plant3"
                        role="tab"
                        aria-controls="plant3"
                        aria-selected="false"
                      >
                        {productsHome[2]?.category}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="plant1"
              role="tabpanel"
            >
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
                    {productsHome[0]?.stocks.map((productStock) => (
                      <SwiperSlide>
                        <div className="col-lg-3" key={productStock._id}>
                          <div className="product_items">
                            <SingleProduct product={productStock} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="plant2" role="tabpanel">
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
                    {productsHome[1]?.stocks.map((productStock) => (
                      <SwiperSlide>
                        <div className="col-lg-3" key={productStock._id}>
                          <div className="product_items">
                            <SingleProduct product={productStock} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="plant3" role="tabpanel">
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
                    {productsHome[2]?.stocks.map((productStock) => (
                      <SwiperSlide>
                        <div className="col-lg-3" key={productStock._id}>
                          <div className="product_items">
                            <SingleProduct product={productStock} />
                          </div>
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
    </div>
  );
}


export default OurProducts;