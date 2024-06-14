import './footer_paspol.css';
import FooterPaspolLogoImg from '../Media/footer_paspol_logo.png';

function FooterPaspol() {
    return (
        <div className="FooterPaspol">
            <div className="PaspolDetails">
                <img src={FooterPaspolLogoImg} className="FooterPaspolLogoImg" alt=""></img>
                <p className="Copylight">
                    Copyright © 2024 PAS-POL -旅のモノづくりブランド-｜TABIPPO All rights reserved.
                </p>
            </div>
            
        </div>
    )
}

export default FooterPaspol;