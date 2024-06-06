import './top_main_share.css';
import TopMainBackTop from '../Media/top_main_backTop.png';

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