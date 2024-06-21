import { Link } from "react-router-dom"
const Signup = () => {
  return (
<div className="bg-white mt-[20px] w-full h-full mb-[50px]">
      <Link to='/' className="w-[24px] h-[24px] mt-[50px] ml-[95%]"><i className="bi bi-x-lg"></i></Link>
      <p className="w-auto h-[24px] mt-[30px] ml-[80%] text-[16px] font-normal leading-[24px] text-left">Already have an account? <Link to='/login' className="text-mainColor">Log in</Link></p>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[100px]">
        <h1 className="w-auto h-[42px] text-[28px] font-bold leading-[42px] text-center">Join Skoutar</h1>
        <p className="w-[480px] h-[60px] text-[20px] font-normal leading-[30px] text-center mt-[10px]">The encompassing platform which connects filmmakers and local hosts</p>
        <div className="w-[510px] flex h-[48px] px-[146px] py-[10px] border border-gray-300 rounded-[8px] mt-[20px]">
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
        <hr className="w-[226px] mt-[10px] border-gray-300" />
        <p className="mx-[10px]">or</p>
        <hr className="w-[226px] mt-[10px] border-gray-300" />
      </div>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[20px]">
        <input type="email" className=' mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter Email' />
        <input type="text" className=' mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] border border-gray-400 rounded-[8px]' placeholder='Enter password' />
      </div>
      <div className="flex items-center justify-center mt-[20px]">
        <p className="font-medium w-[463px] h-[auto]">By signing up you agree to Skoutar’s <Link to='' className="text-mainColor text-underline ">Terms of Service and Privacy Policy.</Link>
        </p>
      </div>
      <div className="h-auto relative flex flex-col items-center justify-center w-[80%] ml-[10%] mt-[20px]">
        <button className=' text-white font-medium mt-[20px] top-[594px] left-[45px] w-[510px] h-[48px] px-[20px] py-[12px] bg-mainColor rounded-[8px]' >Log in</button>
        <hr className="w-[502px] mt-[40px] border-gray-300" />
      </div>
      <div className="flex flex-col items-center justify-center mt-[20px]">
        <p className="text-black font-medium w-[510px]">Skoutar will send you deals, inspiration, and marketing emails. You can opt out at any time from your account settings.</p>
        <p className="w-[500px] text-gray mt-[10px]">I don’t want to receive marketing emails from Skoutar.</p>
      </div>
    </div>  )
}

export default Signup