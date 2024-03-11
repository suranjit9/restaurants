import HeadTitle from "../ShearPage/HeadTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/home/slide1.jpg";
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';

const Cetagori = () => {
    return (
        <div className="md:mb-4 ">
            <HeadTitle subHadding={'From 11:00am to 10:00pm'} hadding={'ORDER ONLINE'}></HeadTitle>
            <div className="text-center ">
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" />
        <h2 className="text-3xl uppercase -mt-20 text-white font-bold ">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        <h2 className="text-3xl uppercase text-white font-bold -mt-20">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <h2 className="text-3xl uppercase text-white font-bold -mt-20">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        <h2 className="text-3xl uppercase text-white font-bold -mt-20">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <h2 className="text-3xl uppercase text-white font-bold ">saladsd</h2>
        </SwiperSlide>
        
        
      </Swiper>
            </div>
            
        </div>
    );
};

export default Cetagori;