import { useState } from 'react';
import Navlogo from '/images/BrandLogo.png';
import { Link } from 'react-router-dom';


const Homenav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/"><img src={Navlogo} alt="Logo" className='Brand w-[100px] h-[24px] sm:w-[146px] sm:h-[34px]' /></Link>


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
          <div className="flex h-auto items-center mt-[8px]">
            <Link><i className={`bi bi-globe text-[15px] md:text-[20px] mr-[1px] h-[30px] p-[10px] w-[25px] cursor-pointer `}></i></Link>
            <Link><i className={`bi bi-bell text-[15px] md:text-[20px] mr-[1px] h-[30px] p-[10px] w-[25px] cursor-pointer `}></i></Link>
            <Link><i className={`bi bi-person text-[15px] md:text-[20px] mr-[1px] p-[10px] hover:bg-mainColor hover:rounded-[50px] hover:text-white cursor-pointer`}><i className="bi bi-chevron-down"></i></i></Link>
            <div className="md:hidden ml-6">
              {/* Mobile Menu */}
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>

        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[44px] w-[250px] border rounded flex items-start justify-center">
                <input type="text" placeholder="search here..." className="h-[40px] p-[5px] w-[200px]" />
                <i className="bi bi-search w-[32px] mt-[7px] h-[28px] bg-mainColor cursor-pointer text-white text-center ml-[5px] rounded pt-[5px] "></i>
              </div>
              <Link className="text-[#222222] hover:text-mainColor font-semibold">Earn</Link>
              <Link className="text-[#222222] hover:text-mainColor font-semibold">Bookings</Link>
              <Link className="text-[#222222] hover:text-mainColor font-semibold">Inbox</Link>
              <Link className="text-[#222222] hover:text-mainColor font-semibold">Become a Host</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Homenav;
