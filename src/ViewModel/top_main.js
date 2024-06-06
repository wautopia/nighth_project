import './top_main.css';
import { TopMainVisual } from '../Model/top_main_visual';
import { TopMainConcept } from '../Model/top_main_concept';
import { TopMainTitle } from '../Model/top_main_title';
import { TopMainMoreButton } from '../Model/top_main_more_button';
import { TopMainProducts } from '../Model/top_main_products';
import { TopMainNew } from '../Model/top_main_news';
import { TopMainShare, BackToTop } from '../Model/top_main_share';
import WorldHeritagePic from '../Media/top_main_product_world_heritage.png';
import TopMainNews1 from '../Media/top_main_news1.jpg';
function TopMain () {
	return (
		<div className="TopMain">
			<TopMainVisual />
			<TopMainConcept />
			
			
			<div className="TopMainProduct">
				<div className="ProductTitle-MoreButton">
					<TopMainTitle
						title="PRODUCT"
					/>
					<TopMainMoreButton />
				</div>
				
				
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>
				<TopMainProducts
					img={WorldHeritagePic}
					title="地球一周 365日 世界遺産絶景の旅"
				/>


			</div>
			<div className="TopMainNews">
				<div className="NewsTitle-MoreButton">
					<TopMainTitle
						title="News"
					/>
					<TopMainMoreButton />
				</div>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
				<TopMainNew
					img={TopMainNews1}
					title="2023年度夏の絶景ポストカード制作スタート！夏景色の写真を大募集！"
					date="2022.7.22"
					description="こんにちは、TABIPPOの小井詰です。 東急ハンズやLOFTにて販売されている、旅好きな方とつくってきたPAS-POLの夏の絶景ポストカード２０２３夏制作をスタートしました。 2023年度も今年同様、四季に合わせて募集をしていきます。年間を通して募集をするので、彩り豊かな四季折々の写真のご応募をお待ちしております。今回は夏の風景写真を募集いたします！ 現在の予定では以下のスケジュールで募集を行い（変更の可能性あり）、夏以降募集の際にはまた、改めてお知らせをいたします。 &nbsp; 写真募集年 ..."
				/>
			</div>
			<div className="TopMainShares">
				<BackToTop />
				<div className="SharesDetails">
					<TopMainShare
						share="Share on Facebook"
					/>
					<TopMainShare
						share="Share on Twitter"
					/>
					<TopMainShare
						share="Hatena Bookmark"
					/>
				</div>
				
			</div>
			
		</div>
	)
}

export default TopMain;
