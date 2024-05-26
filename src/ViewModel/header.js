import './header.css';
import Header_item from '../Model/header_item';
import Header_paspol_logo from '../Model/header_paspol_logo';
import { Link } from 'react-router-dom';


function Header () {
	return(
		<div className="Header">

			<Header_paspol_logo/>

			<div className="Item">
				<Header_item
					h_link='/'
					h_item="TOP"
				/>

				<Header_item
					h_link='/product_page'
					h_item="PRODUCT"
				/>

				<Header_item
					h_link='/about_page'
					h_item="ABOUT"
				/>

				<Header_item
					h_link='/news_page'
					h_item="NEWS"
				/>

				<Header_item
					h_link='/contact_page'
					h_item="CONTACT"
				/>
			</div>
			
		</div>
	) 
}

export default Header;