import './header.css';
import HeaderItem from '../Model/header_item';
import HeaderPaspolLogo from '../Model/header_paspol_logo';
import { Link } from 'react-router-dom';


function Header () {
	return(
		<div className="Header">

			<HeaderPaspolLogo/>

			<div className="Item">
				<HeaderItem
					h_link='/'
					h_item="TOP"
				/>

				<HeaderItem
					h_link='/product_page'
					h_item="PRODUCT"
				/>

				<HeaderItem
					h_link='/about_page'
					h_item="ABOUT"
				/>

				<HeaderItem
					h_link='/news_page'
					h_item="NEWS"
				/>

				<HeaderItem
					h_link='/contact_page'
					h_item="CONTACT"
				/>
			</div>
			
		</div>
	) 
}

export default Header;