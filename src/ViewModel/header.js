import './header.css';
import HeaderItem from '../Model/header_item';
import HeaderPaspolLogo from '../Model/header_paspol_logo';
import HeaderBergerMenu from '../Media/header_berger_menu.png';


function Header () {
	return(
		<div className="Header">
			<HeaderPaspolLogo/>
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
				<div className="MobileMenu">
					<img src={HeaderBergerMenu} className="HeaderBergerMenu" alt=""/>
					<p className="h-item-menu">
						MENU
					</p>
				</div>
				
			</div>
		</div>
	) 
}

export default Header;