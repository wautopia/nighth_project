import './header.css';
import HeaderItem from '../Model/header_item';
import HeaderPaspolLogo from '../Model/header_paspol_logo';
import HeaderBergerMenu from '../Media/header_berger_menu.png';
import { useState } from 'react';


function Header() {
	const [isDataShow, setDataShow] = useState(false);
	return(
		<div className="Header">
			<HeaderPaspolLogo />
			<div className="HeaderItemDetailsSwitch" data-show={isDataShow}>
				<div className="HeaderItemDetails">
					<HeaderItem
						h_link='/'
						h_item="TOP"	
					/>
					<HeaderItem
						h_link='/products'
						h_item="PRODUCT"
					/>
					<HeaderItem
						h_link='/about'
						h_item="ABOUT"
					/>
					<HeaderItem
						h_link='/news'
						h_item="NEWS"
					/>
					<HeaderItem
						h_link='/contact'
						h_item="CONTACT"
					/>
					<button className="button" onClick={() => setDataShow(!isDataShow)}>
						<div className="MobileMenu">	
							<p className="h-item-menu">MENU</p>
							<img className="HeaderBergerMenu" src={ HeaderBergerMenu } alt=""></img>
						</div>
					</button>
				</div>
			</div>
			
		</div>
	) 
}

export default Header;