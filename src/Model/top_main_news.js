import './top_main_news.css';
import { TopMainTitle } from '../Model/top_main_title';
import { TopMainMoreButton } from '../Model/top_main_more_button';
import TopMainNews1 from '../Media/top_main_news1.jpg';
import { Link } from 'react-router-dom';

export function TopMainNews() {
    return (
		<div className="TopMainNews">
			<div className="NewsDetails">
				<div className="NewsTitle-MoreButton">
					<TopMainTitle
						title="News"
					/>
					<TopMainMoreButton />
				</div>
				<div className="NewsTitle">
					<TopMainTitle
						title="News"
					/>
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
				<div className="MoreButton">
					<TopMainMoreButton />
				</div>
			</div>
		</div>
    )
}

export function TopMainNew(props) {
    return (
        <div className="TopMainNew">

			<img src={props.img} className="NewsImg" alt="" width="800" height="365"></img>
            <div className="NewsDetail">
                <p className="News-Title">{props.title}</p>
                <p className="NewsDate">{props.date}</p>
                <p className="NewsDescription">{props.description}</p>
            </div>
                
        </div>
    )
}



//<Link to={props.link} className="NewsLink">