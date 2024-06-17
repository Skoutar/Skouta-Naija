import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer-sec'>
            <div className='footer-text'> 
                <h4>Company</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Services</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className='footer-text'>
                <h4>Support</h4>
                <p>Help Center</p>
                <p>FAQ</p>
                <p>Community</p>
                <p>Resource Center</p>
                <p>Trust and Safety</p>
                <p>Report vulnerability</p>
            </div>
            <div className='footer-text'>
                <h4>Host</h4>
                <p>List Your Space</p>
                <p>Community</p>
            </div>
            <div className='footer-text'>
                <h4>Countries</h4>
                <p>Nigeria</p>
                <p>South Africa</p>
                <p>Ghana</p>
                <p>Mali</p>
                <p>Ivory Coast</p>
            </div>
            <div className='footer-text'>
                <h4>Activities</h4>
            </div>
        </div>
        <div className='foot'>
            <hr className='footer-hr'/>
            <div className='foot-footer'>
                <p>© 2024 Skouta. Made with ❤️ in Nigeria. All rights reserved</p>
                <div className='social-icons'>
                    <img src="images/fb.png" alt="Facebook" className='footer-icons'/>
                    <img src="images/microsoft.png" alt="Microsoft" className='footer-icons'/>
                    <img src="images/apple.png" alt="Apple" className='footer-icons'/>
                    <img src="images/google.png" alt="Twitter" className='footer-icons'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
