import FooterItem from '../Model/footer_item';
import FooterPaspol from '../Model/footer_paspol';
import './footer.css';

function Footer () {
	return (
		<div className="Footer">
			<div className="FooterItemDetails">
				<FooterItem
					f_link='/'
					f_item1="TOP"
					
				/>

				<FooterItem
					f_link='/products'
					f_item1="PRODUCT"
					
				/>

				<FooterItem
					f_link='/about'
					f_item1="ABOUT"
					
				/>

				<FooterItem
					f_link='/news'
					f_item1="NEWS"
					
				/>

				<FooterItem
					f_link='/contact'
					f_item1="CONTACT"
					
				/>
			</div>
			<FooterPaspol/>

		</div>
	)
}

export default Footer;