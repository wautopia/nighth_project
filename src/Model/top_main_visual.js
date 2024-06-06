import './top_main_visual.css';
import TopMainVisualArrow from '../Model/top_main_visual_arrow';
import TopMainVisualOverlay from '../Model/top_main_visual_overlay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import TopMainVisual1 from '../Media/top_main_visual1.jpg';
import TopMainVisual2 from '../Media/top_main_visual2.jpg';
import TopMainVisual3 from '../Media/top_main_visual3.jpg';
import TopMainVisual4 from '../Media/top_main_visual4.jpg';
import TopMainVisual5 from '../Media/top_main_visual5.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export function TopMainVisual () {
	return (
		<div className="TopMainVisual">
            <Swiper
                speed={1500}
                spaceBetween={30}
                 effect='fade'
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                modules={[EffectFade,Autoplay]}
                className="mySwiper"
                
            >
                <SwiperSlide>
                    <img src={TopMainVisual1} className="TopMainVisualImg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TopMainVisual2} className="TopMainVisualImg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TopMainVisual3} className="TopMainVisualImg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TopMainVisual4} className="TopMainVisualImg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TopMainVisual5} className="TopMainVisualImg" alt="" />
                </SwiperSlide>
            </Swiper>
            <TopMainVisualArrow />
            <TopMainVisualOverlay/>

		</div>
	)
}


