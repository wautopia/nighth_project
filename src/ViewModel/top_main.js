import './top_main.css';
import { TopMainVisual } from '../Model/top_main_visual';
import { TopMainConcept } from '../Model/top_main_concept';
import { TopMainProducts } from '../Model/top_main_products';
import { TopMainNews } from '../Model/top_main_news';
import { TopMainShares } from '../Model/top_main_share';

function TopMain () {
	return (
		<div className="TopMain">
			<TopMainVisual />
			<TopMainConcept />
			<TopMainProducts/>
			<TopMainNews/>
			<TopMainShares/>	
		</div>
	)
}

export default TopMain;
