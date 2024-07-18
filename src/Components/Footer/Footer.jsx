
const Footer = () => {
  return (
    <div className="footer-container bg-[#290064] flex flex-col items-center justify-center py-16">
      <div className='footer-sec w-70 md:w-11/12 lg:w-8/12 flex flex-wrap justify-between'>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Company</h4>
          <p className="text-white text-base mb-4">About Us</p>
          <p className="text-white text-base mb-4">Contact Us</p>
          <p className="text-white text-base mb-4">Services</p>
          <p className="text-white text-base mb-4">Careers</p>
          <p className="text-white text-base mb-4">Blog</p>
          <p className="text-white text-base mb-4">Terms</p>
          <p className="text-white text-base mb-4">Privacy</p>
        </div>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Support</h4>
          <p className="text-white text-base mb-4">Help Center</p>
          <p className="text-white text-base mb-4">FAQ</p>
          <p className="text-white text-base mb-4">Community</p>
          <p className="text-white text-base mb-4">Resource Center</p>
          <p className="text-white text-base mb-4">Trust and Safety</p>
          <p className="text-white text-base mb-4">Report vulnerability</p>
        </div>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Host</h4>
          <p className="text-white text-base mb-4">List Your Space</p>
          <p className="text-white text-base mb-4">Community</p>
        </div>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Countries</h4>
          <p className="text-white text-base mb-4">Nigeria</p>
          <p className="text-white text-base mb-4">South Africa</p>
          <p className="text-white text-base mb-4">Ghana</p>
          <p className="text-white text-base mb-4">Mali</p>
          <p className="text-white text-base mb-4">Ivory Coast</p>
        </div>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Activities</h4>
          <p className="text-white text-base mb-4">Production</p>
          <p className="text-white text-base mb-4">Filming</p>
          <p className="text-white text-base mb-4">Music Videos</p>
          <p className="text-white text-base mb-4">Photo Shoot</p>
          <p className="text-white text-base mb-4">Meeting</p>
          <p className="text-white text-base mb-4">View All</p>
        </div>
      </div>
      <div className='foot w-[80%] md:w-11/12 lg:w-8/12'>
        <div className='foot-footer w-70 md:w-11/12 lg:w-8/12 flex items-center justify-between'>
          <p className='text-white w-3/5 text-base lg:text-lg xl:text-xl'>
            © 2024 Skouta. Made with ❤️ in Nigeria. All rights reserved
          </p>
          <div className='social-icons flex'>
            <img src="images/fb.png" alt="Facebook" className='footer-icons mr-4' />
            <img src="images/microsoft.png" alt="Microsoft" className='footer-icons mr-4' />
            <img src="images/apple.png" alt="Apple" className='footer-icons mr-4' />
            <img src="images/google.png" alt="Google" className='footer-icons mr-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
