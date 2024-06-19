import { Link } from "react-router-dom"
import "./Login.css"
const Login = () => {
  return (
    <div className="bg-white w-full h-full">
      <Link to='/' className="w-[24px] h-[24px] mt-[50px] ml-[95%]"><i className="bi bi-x-lg"></i></Link>
      <p className="w-auto h-[24px] mt-[30px] ml-[80%] text-[16px] font-normal leading-[24px] text-left">Dont have an acount? <Link className="text-mainColor">Signup</Link></p>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[100px]">
        <h1 className="w-auto h-[42px] text-[28px] font-bold leading-[42px] text-center">Welcome back</h1>
        <p className="w-auto h-[30px] text-[20px] font-normal leading-[30px] text-center mt-[10px]">Please enter your details to proceed</p>
        <div className="w-[510px] flex h-[48px] px-[146px] py-[10px] border border-gray-300 rounded-[8px] mt-[30px]">
          <img className="w-[24px] h-[24px] " src="images/google.png" alt="" />
          <p className='w-[auto] ml-[10px] h-[28px] text-[18px] font-medium leading-[28px] text-left'>Log in with Google</p>
        </div>
        <div className="w-[510px] flex h-[48px] px-[146px] py-[10px] border border-gray-300 rounded-[8px] mt-[30px]">
          <img className="w-[24px] h-[24px]" src="images/fb.png" alt="" />
          <p className='w-[auto] ml-[5px] h-[28px] text-[18px] font-medium leading-[28px] text-left'>Login with Facebook</p>
        </div>
        <div className="w-[510px] flex h-[48px] px-[146px] py-[10px] border border-gray-300 rounded-[8px] mt-[30px]">
          <img className="w-[24px] h-[24px]" src="images/apple2..png" alt="" />
          <p className='w-[auto] ml-[10px] h-[28px] text-[18px] font-medium leading-[28px] text-left'>Login with Apple</p>
        </div>
        <div className="w-[510px] flex h-[48px] px-[146px] py-[10px] border border-gray-300 rounded-[8px] mt-[30px]">
          <img className="w-[24px] h-[24px]" src="images/microsoft.png" alt="" />
          <p className='w-[auto] ml-[10px] h-[28px] text-[18px] font-medium leading-[28px] text-left'>Login with Microsoft</p>
        </div>
      </div>
      <div className="flex w-[80%] ml-[10%] h-auto items-center mt-[20px] justify-center">
        <hr className="w-[600px] mt-[10px] border-gray-300"/>
        <p className="mx-[10px]">or</p>
        <hr className="w-[600px] mt-[10px] border-gray-300"/>
      </div>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[20px]">
        <input type="email" className=' mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter Email' />
        <input type="text" className=' mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter password' />
      </div>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[20px]">
        <button  className=' text-white font-medium mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] bg-mainColor rounded-[8px]' >Log in</button>
        <Link to='/forget-password'>Forget Password?</Link>
        </div>
    </div>
  )
}

export default Login