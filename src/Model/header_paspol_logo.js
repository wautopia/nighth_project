import './header_paspol_logo.css';
import { Link } from 'react-router-dom';
import Toppage from '../View/top_page';


function HeaderPaspolLogo(){
	return (
		<Link className="HeaderPaspolLogoLink" to={Toppage}>
			<div className="HeaderPaspolLogo"></div>
		</Link>
		
	)
}

 export default HeaderPaspolLogo;