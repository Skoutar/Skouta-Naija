import Footer from "../Components/Footer/Footer"
import Sidebar from "../Components/Sidebar"
import Homenav from "../Components/navbar/Homenav"
import { useState } from "react";


const Profile = () => {
    const [profileImage, setProfileImage] = useState("images/profile.png");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        document.getElementById("fileInput").click();
    };
    return (
        <div className="h-auto w-full bottom-[0px]">
            <Homenav />
            <div className="flex w-full h-[1260px]">
                <Sidebar />
                <div className="w-auto m-[80px]">
                    <h2 className="w-[400px] h-[42px] text-[28px] text-[#222222] font-medium">
                        Basic Information
                    </h2>
                    <div className="flex items-center justify-start relative mt-[15px]">
                        <img src={profileImage} alt="Profile" className="relative w-[64px] h-[64px] rounded-[50px]" />
                        <i
                            className="bi bi-camera absolute ml-[45px] p-[2px] text-[20px] cursor-pointer border text-[#6200EE] bg-white rounded-[25px]"
                            onClick={triggerFileInput}
                        ></i>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="flex w-auto h-[84] mt-[40px]">
                        <div className="w-[547px] h-[84px] ">
                            <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">First name *</p>
                            <input type="text" placeholder="Enter First Name" className="mt-[20px] w-[547px] h-[48px] border rounded-[10px] p-[10px]" />
                        </div>
                        <div className="w-[547px] h-[84px] ml-[60px]">
                            <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Last name *</p>
                            <input type="text" placeholder="Enter Last Name" className="w-[547px] mt-[20px] h-[48px] border rounded-[10px] p-[10px]" />
                        </div>
                    </div>
                    <div className="w-[547px] h-[84px] mt-[40px]">
                        <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Phone Number *</p>
                        <input type="Number" placeholder="Phone No..." className="w-[1150px] mt-[20px] h-[48px] border rounded-[10px] p-[10px]" />
                    </div>
                    <div className="w-[547px] h-[84px] mt-[40px]">
                        <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Email *</p>
                        <input type="Email" placeholder="Email..." className="w-[1120px] mt-[20px] bg-[#BABABA] h-[48px] border rounded-[10px] p-[10px]" />
                    </div>
                    <div className="flex w-auto h-[84] mt-[40px]">
                        <div className="w-[547px] h-[84px] ">
                            <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Organization *</p>
                            <input type="text" placeholder="Enter First Name" className="mt-[20px] w-[547px] h-[48px] border rounded-[10px] p-[10px]" />
                        </div>
                        <div className="w-[547px] h-[84px] ml-[60px]">
                            <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Job title*</p>
                            <input type="text" placeholder="Enter Last Name" className="w-[547px] mt-[20px] h-[48px] border rounded-[10px] p-[10px]" />
                        </div>
                    </div>
                    <div className="w-[547px] h-[84px] mt-[40px]">
                        <p className="w-auto h-[24px] font-semibold text-[16px] text-[#222222]">Choose a category that fits you best</p>
                        <p className="mt-[10px]">pick an option or type your own</p>
                        <input type="Select" placeholder="select" className="w-[1150px] mt-[20px] h-[48px] border rounded-[10px] p-[10px]" />
                    </div>   
                    <div className="w-[547px] h-[201px] mt-[100px]">
                        <p className="w-auto h-auto font-semibold text-[16px] text-[#222222]">About</p>
                        <input type="Select" placeholder="Write a few words about yourself. People like to know who they’re dealing with." className="w-[1150px] h-[165px] border rounded-[10px]" />
                    </div> 
                    <div className="flex items-center justify-center">
                    <button className='w-[228px] h-[64px] px-2 py-5 rounded-lg text-[#F8F8F8] bg-[#6200EE] border border-solid ml-5 mt-10 transition duration-600 hover:bg-[#290064]"'><span>Get Started</span></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Profile