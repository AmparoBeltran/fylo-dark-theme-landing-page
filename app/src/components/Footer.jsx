import { FooterStyled } from "./styles/Footer.styled";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <FooterStyled>
            <img src="/images/logo.svg" alt="company logo" />
            <div className="footer-wrapper">
                <div className="contact-wrapper">
                    <div className="contact-location">
                        <img src="/images/icon-location.svg" alt="icon location" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    <div className="contact">
                        <div className="contact-details">
                            <img src="/images/icon-phone.svg" alt="icon phone" />
                            <span>+1-543-123-4567</span>
                        </div>
                        <div className="contact-details">
                            <img src="/images/icon-email.svg" alt="icon phone" />
                            <span>example@fylo.com</span>
                        </div>
                    </div>
                </div>
                <div className="footer-nav-wrapper">
                    <div>
                        <a href="#">About Us</a>
                        <a href="#">Jobs</a>
                        <a href="#">Press</a>
                        <a href="#">Blog</a>
                    </div>
                    <div>
                        <a href="#">Contact Us</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
                <div className="social">

                    <a href="#"><FaFacebookF /></a>


                    <a href="#"><FaTwitter /></a>


                    <a href="#"><FaInstagram /></a>

                </div>
            </div>
        </FooterStyled>
    )
}