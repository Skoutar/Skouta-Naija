import { Link } from "react-router-dom"

Link
const Checkemail = () => {
    return (
        <div>
            <div className="bg-white mt-[20px] w-full h-full mb-[50px]">
                <Link to='/' className="w-[24px] h-[24px] mt-[50px] ml-[95%]"><i className="bi bi-x-lg"></i></Link>
                <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[100px]">
                    <h1 className="w-auto h-[42px] text-[28px] font-bold leading-[42px] text-center">Thank you!</h1>
                    <p className="w-[438px] h-[30px] text-[20px] font-normal leading-[30px] text-center mt-[10px]">Please check your email.We sent you instructions to reset your password.</p>
                    <button className=' text-white font-medium mt-[60px] top-[594px] left-[45px] w-[160px] h-[48px] px-[20px] py-[12px] bg-mainColor rounded-[8px]'>Close</button>  
                </div>
            </div>
        </div>
    )
}

export default Checkemail