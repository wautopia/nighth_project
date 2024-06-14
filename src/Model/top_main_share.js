import './top_main_share.css';
import TopMainBackTop from '../Media/top_main_backTop.png';

export function TopMainShares() {
    return (
        <div className="TopMainShares">
            <BackToTop />
            <div className="SharesDetails-pc">
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
            <div className="SharesDetails-phone">
                <TopMainShare
                    share="Share on Facebook"
                />
                <TopMainShare
                    share="Share on Twitter"
                />
                <TopMainShare
                    share="Hatena Bookmark"
                />
                <TopMainShare
                    share="Send to Line"
                />
            </div>
        </div>
    )
}
export function TopMainShare(props) {
    return (
        <div className="TopMainShare">
            <p className="ShareButton">{props.share}</p>
        </div>
    )
}
export function BackToTop() {
    return (
        <div className="TopMainBackToTop">
            <img src={TopMainBackTop} className="BackToTop" alt=""></img>
        </div>
        
    )
}