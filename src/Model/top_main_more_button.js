import './top_main_more_button.css';
import { Link } from 'react-router-dom';
import TopMainMoreArrow from '../Media/top_main_more_arrow.png';

export function TopMainMoreButton() {
    return (
       <div className="TopMainMoreButton">
            <p className="More">
                MORE
                <img className="TopMainMoreArrow" src={TopMainMoreArrow} alt=""></img>
            </p>
       </div>
        
            
       
        
    )
}

//<Link to={props.link} className="MorebuttonLink">
