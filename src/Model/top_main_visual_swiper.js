import './top_main_visual_swiper.css';
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

function TopMainVisualSwiper() {
    return (
        <div className="TopMainVisualSwiper">
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
                modules={[EffectFade, Autoplay]}
                className="Swiper"
            >
                <SwiperSlide>
                    <div className="test">
                        <img src={TopMainVisual1} className="TopMainVisualImg" alt="" width="1903px" height="1007px" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test">
                        <img src={TopMainVisual2} className="TopMainVisualImg" alt="" width="1903px" height="1007px" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test">
                        <img src={TopMainVisual3} className="TopMainVisualImg" alt="" width="1903px" height="1007px" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test">
                        <img src={TopMainVisual4} className="TopMainVisualImg" alt="" width="1903px" height="1007px" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test">
                        <img src={TopMainVisual5} className="TopMainVisualImg" alt="" width="1903px" height="1007px" />
                    </div>                   
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default TopMainVisualSwiper;