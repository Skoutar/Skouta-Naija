import { Link } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Sidebar from "../Components/Sidebar"
import Homenav from "../Components/navbar/Homenav"

const Payment = () => {
    return (
        <>
            <Homenav />
            <div className="flex">
                <Sidebar />
                <div className="w-full md:w-auto m-4 md:m-10">
                    <h2 className="w-full md:w-[400px] h-[42px] text-[28px] text-[#222222] font-medium">
                    Payment Methods                    
                    </h2>
                    <p className=" mt-3 text-[16px] text-[#6B6B6B]">Manage your payment methods here</p>
                    <Link className="" to='/Add-Payment'>
                        <button className="w-[228px] mt-8 h-[64px] rounded-lg text-white bg-[#6200EE] border border-solid transition duration-600 hover:bg-[#290064]">
                            Get Started
                        </button>
                    </Link>
                    <h2 className="w-full md:w-[400px] mt-8 h-[42px] text-[28px] text-[#222222] font-medium">
                    Coupons                    
                    </h2>
                    <p className=" mt-3 text-[16px] text-[#6B6B6B]">You dont have any coupons yet.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment