import { Link } from "react-router-dom"
const Forgetpassword = () => {
    return (
        <div className="bg-white w-full h-full mt-[20px] mb-[50px]">
            <Link to='/' className="w-[24px] h-[24px] mt-[50px] ml-[95%]"><i className="bi bi-x-lg"></i></Link>
            <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[100px]">
                <h1 className="w-auto h-[42px] text-[28px] font-bold leading-[42px] text-center">Forget password?</h1>
                <p className="w-[438px] h-[30px] text-[20px] font-normal leading-[30px] text-center mt-[10px]">Enter the email address associated with your account, and we’ll email you a link  with instructions to reset your password.</p>
                <input type="email" className=' mt-[100px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter Email' />
                <Link to='/checkemail'>
                    <button className=' text-white font-medium mt-[40px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] bg-mainColor rounded-[8px]' >Reset password</button>
                </Link>
            </div>
        </div>
    )
}

export default Forgetpassword