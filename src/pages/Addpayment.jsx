import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar";
import Homenav from "../Components/navbar/Homenav";
import { Link } from 'react-router-dom';

const Addpayment = () => {
  return (
    <>
      <Homenav />
      <div className="flex flex-col md:flex-row w-full">
        <Sidebar />
        <div className="flex-1 m-4 md:m-10">
          <Link to="/payment" className="block text-[#6B6B6B] text-[15px] font-medium mb-4">
            <i className="bi bi-arrow-left mr-3"></i>Back to Payment
          </Link>
          <h2 className="text-[24px] md:text-[28px] text-[#222222] font-medium mb-6 md:mb-10">Add Payment Method</h2>
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[16px] text-[#222222]">Card Number</p>
              <div className="flex space-x-2">
                <img src="images/mastercard.png" alt="MasterCard" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[25px]" />
                <img src="images/visa.png" alt="Visa" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[25px]" />
                <img src="images/mastercard.png" alt="MasterCard" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[25px]" />
                <img src="images/visa.png" alt="Visa" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[25px]" />
              </div>
            </div>
            <input type="number" placeholder="0000 0000 0000 0000" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
          </div>
          <div className="flex flex-col md:flex-row w-full mt-6 md:mt-10 space-y-6 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2">
              <p className="font-semibold text-[16px] text-[#222222]">Expiry date</p>
              <input type="text" placeholder="MM/YY" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-semibold text-[16px] text-[#222222]">CVC</p>
              <input type="text" placeholder="000" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
            </div>
          </div>
          <div className="w-full mt-6 md:mt-10">
            <p className="font-semibold text-[16px] text-[#222222]">Name on the card</p>
            <input type="text" placeholder="Enter name" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
          </div>
          <div className="mt-5">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2 w-6 h-6" />
              <label htmlFor="rememberMe" className="font-medium">Remember me</label>
            </div>
            <p className="text-sm mt-2 ml-8">Scheduled payment will be automatically deducted from this card</p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-10">
            <button className="w-full md:w-[228px] h-[48px] md:h-[64px] rounded-lg text-white bg-[#6200EE] border border-solid transition duration-600 hover:bg-[#290064]">
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Addpayment;