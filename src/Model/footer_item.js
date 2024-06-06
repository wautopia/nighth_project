import './footer_item.css';
import { Link } from 'react-router-dom';

function FooterItem(props) {
	return (
		<div className="FooterItem">
			<Link className="f-link" to={props.f_link}>
				<p className="f-item1">{props.f_item1}</p>
			</Link>
		</div>
	)
}

export default FooterItem;