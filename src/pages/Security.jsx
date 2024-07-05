import Footer from "../Components/Footer/Footer"
import Sidebar from "../Components/Sidebar"
import Homenav from "../Components/navbar/Homenav"

const Security = () => {
    return (
        <div>
            <Homenav />
            <div className="flex">
                <Sidebar />
                <div className="w-full m-4 md:m-10">
                    <h2 className="w-full md:w-[400px] h-[42px] text-[28px] text-[#222222] font-medium">
                        Login & Security                    
                    </h2>
                    <p className="w-full md:w-[400px] mt-10 text-[20px] text-[#222222] font-medium">Password</p>
                    <div className="w-full mt-3">
                        <p className="font-semibold text-[16px] text-[#222222]">Enter current password *</p>
                        <input type="number" placeholder="Phone No..." className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">Enter new password *</p>
                        <input type="number" placeholder="Phone No..." className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">Confirm new password *</p>
                        <input type="number" placeholder="Phone No..." className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <button className="w-[228px] h-[64px] rounded-lg text-white bg-[#6200EE] border border-solid transition duration-600 hover:bg-[#290064]">
                            Get Started
                        </button>
                    </div>
                    <h2 className="w-full md:w-[400px] mt-[50px] h-[42px] text-[28px] text-[#222222] font-medium">
                    Linked Accounts                    
                    </h2>
                    <div className="w-full flex items-center justify-between">
                        <div>
                            <div className="flex gap-[12px] mt-[10px]">
                                <img src="images/fb10.png" alt="fb-logo" />
                                <p className="md:text-[16px] text-[12px] text-[#999999]">Facebook</p>
                            </div>
                            <p className="md:text-[16px] text-[12px] text-[#999999]">Not connected</p>
                        </div>
                        <p className="md:text-[16px] text-[12px] text-[#6200EE]">Connect</p>
                    </div>
                    <hr className="w-full border-[#BABABA] mt-2"/>
                    <div className="w-full flex items-center mt-[40px] justify-between">
                        <div>
                            <div className="flex gap-[12px] ">
                                <img src="images/google-b.png" alt="fb-logo" />
                                <p className="md:text-[16px] text-[12px] text-[#999999]">Facebook</p>
                            </div>
                            <p className="md:text-[16px] text-[12px] text-[#999999]">Not connected</p>
                        </div>
                        <p className="md:text-[16px] text-[12px] text-[#6200EE]">Connect</p>
                    </div>
                    <hr className="w-full border-[#BABABA] mt-2"/>
                    <div className="w-full flex items-center justify-between">
                        <div>
                            <div className="flex gap-[12px] mt-[40px]">
                                <img src="images/microsoft-b.png" alt="fb-logo" />
                                <p className="md:text-[16px] text-[12px] text-[#999999]">Facebook</p>
                            </div>
                            <p className="md:text-[16px] text-[12px] text-[#999999]">Not connected</p>
                        </div>
                        <p className="md:text-[16px] text-[12px] text-[#6200EE]">Connect</p>
                    </div>
                    <hr className="w-full border-[#BABABA] mt-2"/>
                    <div className="w-full flex items-center justify-between">
                        <div>
                            <div className="flex gap-[12px] mt-[40px]">
                                <img src="images/apple-b.png" alt="fb-logo" />
                                <p className="md:text-[16px] text-[12px] text-[#999999]">Facebook</p>
                            </div>
                            <p className="md:text-[16px] text-[12px] text-[#999999]">Not connected</p>
                        </div>
                        <p className="md:text-[16px] text-[12px] text-[#6200EE]">Connect</p>
                    </div>
                    <hr className="w-full border-[#BABABA] mt-2"/>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Security