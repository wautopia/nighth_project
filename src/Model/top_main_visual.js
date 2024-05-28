import './top_main_visual.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import TopMainVisual1 from '../Media/top_main_visual1.jpg';
import TopMainVisual2 from '../Media/top_main_visual2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

function TopMainVisual () {
	return (
		<div className="TopMainVisual">
            <Swiper
                speed={1500}
                spaceBetween={30}
                 effect='fade'
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade,Autoplay, Pagination]}
                className="mySwiper"
                
            >
                <SwiperSlide>
                    <img src={TopMainVisual1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TopMainVisual2} alt="" />
                </SwiperSlide>
            </Swiper>
           

		</div>
	)
}

export default TopMainVisual;