import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'swiper';
import { useTranslation } from 'react-i18next';

import { topSellingProductsList } from '../../actions/homePageActions';
import SingleProduct from './SingleProduct';

import 'swiper/css';
import 'swiper/css/pagination';

import './products.css';

const TopSellingProducts = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const topSellingProduct = useSelector((state) => state.topSellingProduct);
    const { loading, error, topSelling } = topSellingProduct;

    useEffect(() => {
      dispatch(topSellingProductsList());
    }, []);
  
 
 
  return (
    <div>
      <div className="product_area product_deals ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section_title">
                <h2>{t('top_selling')}</h2>
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
                  {topSelling?.map((product) => (
                    <SwiperSlide>
                      <div className="col-lg-3">
                        <div className="product_items">
                          <SingleProduct product={product} page="topSelling" />
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
  );
};

export default TopSellingProducts;
