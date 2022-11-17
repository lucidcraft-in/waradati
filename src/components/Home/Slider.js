import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';

import { homePageBanner } from '../../actions/homePageActions';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider =() => {

  const dispatch = useDispatch();
  

     const bannerList = useSelector((state) => state.bannerList);
     const { loading, error, banners } = bannerList;

  useEffect(() => {
    dispatch(homePageBanner());
  }, []);
  
  

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {banners?.map((banner) => (
        <SwiperSlide>
          <img src={`${banner.image}`} />
        </SwiperSlide>
      ))}

     
    </Swiper>
  );
}


export default Slider;