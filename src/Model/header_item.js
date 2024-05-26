import './header_item.css';
import { Link } from 'react-router-dom';

function Header_item(props) {
	return(
		<div className="Header_item">
			<Link className="h-link" to={props.h_link}>
				<div className="h-item">{props.h_item}</div>
			</Link>
		</div>
	)
}

export default Header_item;