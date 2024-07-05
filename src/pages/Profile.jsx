import Footer from "../Components/Footer/Footer"
import Sidebar from "../Components/Sidebar"
import { useState } from "react";
import Homenav from "../Components/navbar/Homenav";


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
                <div className="w-full md:w-auto m-4 md:m-10">
                    <h2 className="w-full md:w-[400px] h-[42px] text-[28px] text-[#222222] font-medium">
                        Basic Information
                    </h2>
                    <div className="flex items-center justify-start relative mt-4">
                        <img src={profileImage} alt="Profile" className="relative w-[64px] h-[64px] rounded-full" />
                        <i
                            className="bi bi-camera absolute ml-10 p-1 text-[20px] cursor-pointer text-[#6200EE] bg-white rounded-full"
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
                    <div className="flex flex-col md:flex-row w-full mt-10">
                        <div className="w-full md:w-[500px] mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">First name *</p>
                            <input type="text" placeholder="Enter First Name" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                        <div className="w-full md:w-[500px] md:ml-10">
                            <p className="font-semibold text-[16px] text-[#222222]">Last name *</p>
                            <input type="text" placeholder="Enter Last Name" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">Phone Number *</p>
                        <input type="number" placeholder="Phone No..." className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">Email *</p>
                        <input type="email" placeholder="Email..." className="mt-2 w-full bg-[#BABABA] h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-10">
                        <div className="w-full md:w-[500px] mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">Organization *</p>
                            <input type="text" placeholder="Enter Organization" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                        <div className="w-full md:w-[500px] md:ml-10">
                            <p className="font-semibold text-[16px] text-[#222222]">Job title *</p>
                            <input type="text" placeholder="Enter Job Title" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">Choose a category that fits you best</p>
                        <p className="mt-2">Pick an option or type your own</p>
                        <input type="text" placeholder="Select" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="w-full mt-10">
                        <p className="font-semibold text-[16px] text-[#222222]">About</p>
                        <textarea
                            placeholder="Write a few words about yourself. People like to know who they’re dealing with."
                            className="mt-2 w-full h-[165px] border rounded-[10px] p-2"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <button className="w-[228px] h-[64px] rounded-lg text-white bg-[#6200EE] border border-solid transition duration-600 hover:bg-[#290064]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Profile