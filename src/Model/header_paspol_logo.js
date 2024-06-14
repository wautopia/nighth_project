import './header_paspol_logo.css';
import { Link } from 'react-router-dom';
import PaspolLogo from '../Media/header_paspol_logo.png';
import Toppage from '../View/top_page';


function HeaderPaspolLogo(){
	return (
		<Link className="HeaderPaspolLogoLink" to={Toppage}>
			<img className="HeaderPaspolLogo" src={PaspolLogo } alt=""></img>
		</Link>
		
	)
}

 export default HeaderPaspolLogo;