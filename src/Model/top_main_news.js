import './top_main_news.css';
import { Link } from 'react';

export function TopMainNew(props) {
    return (
        <div className="TopMainNew">
            
            <img src={props.img} className="NewsImg" alt=""></img>
            <div className="NewsDetails">
                <p className="NewsTitle">{props.title}</p>
                <p className="NewsDate">{props.date}</p>
                <p className="NewsDescription">{props.description}</p>
            </div>
                
        </div>
    )
}

//<Link to={props.link} className="NewsLink">