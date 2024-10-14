import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Delicious meals delivered to your door! Enjoy quick and reliable service for all your cravings. Explore a variety of cuisines and savor your favorites anytime. Satisfaction is just a click away!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebookicon" />
                        <img src={assets.twitter_icon} alt="twittericon" />
                        <img src={assets.linkedin_icon} alt="linkedinicon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>01-4357621</li>
                        <li>info@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© 2024 Tomato Pvt. Ltd. All Rights Reserved</p>
        </div>
    )
}

export default Footer