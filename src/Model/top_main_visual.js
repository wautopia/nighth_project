import './top_main_visual.css';
import TopMainVisualArrow from '../Model/top_main_visual_arrow';
import TopMainVisualOverlay from '../Model/top_main_visual_overlay';
import TopMainVisualSwiper from '../Model/top_main_visual_swiper';
import TopMainVisualPaspolLogo from '../Model/top_main_visual_paspol_logo';


export function TopMainVisual () {
	return (
        <div className="TopMainVisual">
            <TopMainVisualOverlay />
            <TopMainVisualPaspolLogo/>
            <TopMainVisualSwiper/>
            <TopMainVisualArrow />
		</div>
	)
}


