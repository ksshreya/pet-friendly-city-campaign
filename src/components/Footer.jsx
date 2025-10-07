import React from 'react';

const Footer = () => {
    return (
        <footer id="contact-us">
            <div className="contact-info">
                <div className="our-hub">
                    <span>OUR HUB:</span>
                    <div className="office">
                        <span>Bhopal Office:</span>
                        <p>Third Floor, Above Bread & Better, Near Shiyoy Complex, Gulmohar, Bhopal, Madhya Pradesh 462039</p>
                    </div>
                    <div className="office">
                        <span>Mumbai Office:</span>
                        <p>74 Technopark, MIDC Gate no 2, Seepz, Andheri East, Mumbai, Maharashtra 400069</p>
                    </div>
                    <div className="office">
                        <span>Delhi Office:</span>
                        <p>1112, Surya kiran building, Connaught Place, New Delhi, 110001</p>
                    </div>
                    <div className="office">
                        <span>Pune Office:</span>
                        <p>First Floor, Creaticity Mall, Opposite Golf Course, Shastrinagar, Yerawada, Pune 411006</p>
                    </div>
                    <div className="office">
                        <span>Indore Office:</span>
                        <p>The One, RNT Marg, Indore, Madhya Pradesh 452001</p>
                    </div>
                </div>
                <div className="contact">
                    <p>Contact Us:</p>
                    <p>Email: info@collegetips.in</p>
                    <p>Website: www.collegetips.in</p>
                    <div className="social-media-icons">
                        <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
                        <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
                        <a href="#"><img src="/images/twitter-icon.png" alt="Twitter" /></a>
                        <a href="#"><img src="/images/youtube-icon.png" alt="YouTube" /></a>
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; 2025 Pet-Friendly City Campaign | Making Cities Paw-some! 🐾</p>
        </footer>
    );
};

export default Footer;