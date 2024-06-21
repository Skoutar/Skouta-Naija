import { Link } from "react-router-dom"

const Reset = () => {
  return (
    <div className="bg-white mt-[20px] w-full h-full mb-[50px]">
    <Link to='/' className="w-[24px] h-[24px] mt-[50px] ml-[95%]"><i className="bi bi-x-lg"></i></Link>
    <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[100px]">
        <h1 className="w-auto h-[42px] text-[28px] font-bold leading-[42px] text-center">Change your password</h1>
        <p className="w-[438px] h-[30px] text-[20px] font-normal leading-[30px] text-center mt-[10px]">Please enter a new password that is different from the previously existing one.</p>
        <input type="email" className=' mt-[100px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter EmailEnter New Password' />
        <input type="email" className=' mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Confirm Password' />
        <Link >
            <button className=' text-white font-medium mt-[40px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] bg-mainColor rounded-[8px]' >Change password</button>
        </Link>
    </div>
</div>  )
}

export default Reset