import { useState } from 'react';
import Navlogo from '/images/BrandLogo.png'; 
import { Link } from 'react-router-dom';


const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <img src={Navlogo} alt="Logo" className='Brand w-[100px] h-[24px] sm:w-[146px] sm:h-[34px]' />


          {/* Search Input (Hidden on Small Screens) */}
          <div className="h-[50px] hidden w-[272px] border rounded sm:flex items-center justify-center">
        <input type="text" placeholder="search here..." className="h-[40px]" />
        <i className="bi bi-search w-[35px] h-[35px] bg-mainColor cursor-pointer text-white text-center ml-[5px] rounded pt-[5px] "></i>
      </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
        <Link className="text-[#222222] hover:text-mainColor">Earn</Link>
        <Link className="text-[#222222] hover:text-mainColor">Bookings</Link>
        <Link className="text-[#222222] hover:text-mainColor">Inbox</Link>
        <Link className="text-[#222222] hover:text-mainColor">Become a Host</Link>
          </div>
          <div className="sm:flex hidden h-auto">
        <Link><i className={`bi bi-globe text-[30px] mr-[30px] h-[30px] p-[10px] w-[25px] cursor-pointer `}></i></Link>
        <Link><i className={`bi bi-bell text-[30px] mr-[30px] h-[30px] p-[10px] w-[25px] cursor-pointer `}></i></Link>
        <Link><i className={`bi bi-person text-[30px] mr-[30px] p-[10px] cursor-pointer`}></i></Link>
      </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-mainColor">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-mainColor">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-mainColor">
                Contact
              </a>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:border-mainColor"
                />
                <button className="bg-mainColor text-white px-4 py-2 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Mobilemenu;
