import './top_main_products.css';
import { TopMainTitle } from '../Model/top_main_title';
import { TopMainMoreButton } from '../Model/top_main_more_button';
import WorldHeritagePic from '../Media/top_main_product_world_heritage.png';

export function TopMainProducts() {
	return (
		<div className="TopMainProducts">
			<div className="ProductTitle-MoreButton">
				<TopMainTitle
					title="PRODUCT"
				/>
				<TopMainMoreButton />
			</div>
			<div className="ProductTitle">
				<TopMainTitle
					title="PRODUCT"
				/>
			</div>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<TopMainProduct
				img={WorldHeritagePic}
				title="地球一周 365日 世界遺産絶景の旅"
			/>
			<div className="MoreButton">
				<TopMainMoreButton />
			</div>
        </div>
        
    )
}
 export function TopMainProduct(props) {
    return (
		<div className="TopMainProduct">
            <img src={props.img} className="product-img" alt="" width="484" height="640"></img>
            <p className="product-title">{props.title}</p>
        </div>
    )
    
}

