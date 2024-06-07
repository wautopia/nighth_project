import './header_item.css';
import { Link } from 'react-router-dom';

function HeaderItem(props) {
	return(
		<div className="HeaderItem">
			<Link className="h-link" to={props.h_link}>
				<p className="h-item">{props.h_item}</p>
			</Link>
		</div>
	)
}
export default HeaderItem;