import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-white mt-5 w-full min-h-screen mb-12 p-4 sm:p-8 md:p-12">
      <Link to='/' className="block w-6 h-6 mt-12 ml-auto"><i className="bi bi-x-lg"></i></Link>
      <p className="mt-8 text-center sm:text-right text-base sm:text-lg">
        Already have an account? <Link to='/login' className="text-mainColor">Log in</Link>
      </p>
      <div className="mt-24 flex flex-col items-center justify-center mx-auto w-full sm:w-3/4 lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Join Skoutar</h1>
        <p className="w-full sm:w-3/4 lg:w-2/3 text-base sm:text-lg text-center mt-2">
          The encompassing platform which connects filmmakers and local hosts
        </p>
        
        <div className="w-full sm:w-3/4 lg:w-2/3 flex flex-col gap-4 mt-6">
          <button className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg">
            <img className="w-6 h-6" src="images/google.png" alt="Google" />
            <p className="ml-2 text-base font-medium">Log in with Google</p>
          </button>
          <button className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg">
            <img className="w-6 h-6" src="images/fb.png" alt="Facebook" />
            <p className="ml-2 text-base font-medium">Login with Facebook</p>
          </button>
          <button className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg">
            <img className="w-6 h-6" src="images/apple2.png" alt="Apple" />
            <p className="ml-2 text-base font-medium">Login with Apple</p>
          </button>
          <button className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg">
            <img className="w-6 h-6" src="images/microsoft.png" alt="Microsoft" />
            <p className="ml-2 text-base font-medium">Login with Microsoft</p>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <hr className="w-1/3 border-gray-300" />
        <p className="mx-2">or</p>
        <hr className="w-1/3 border-gray-300" />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center mx-auto w-full sm:w-3/4 lg:w-1/2">
        <div className="relative w-full">
          <i className="bi bi-envelope-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type="email" 
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg" 
            placeholder="Enter Email" 
          />
        </div>
        <div className="relative w-full mt-4">
          <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type={passwordVisible ? "text" : "password"} 
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg" 
            placeholder="Enter Password" 
          />
          <i 
            onClick={togglePasswordVisibility} 
            className={`bi ${passwordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
          ></i>
        </div>
        <p className="text-center mt-4 text-sm sm:text-base">
          By signing up you agree to Skoutar’s <Link to='' className="text-mainColor underline">Terms of Service and Privacy Policy.</Link>
        </p>
        <button className="mt-4 w-full h-12 px-4 bg-mainColor text-white font-medium rounded-lg">Sign up</button>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-center w-full sm:w-3/4 lg:w-1/2 text-black font-medium">
          Skoutar will send you deals, inspiration, and marketing emails. You can opt out at any time from your account settings.
        </p>
        <p className="text-center w-full sm:w-3/4 lg:w-1/2 text-gray-500 mt-2">
          I don’t want to receive marketing emails from Skoutar.
        </p>
      </div>
    </div>
  )
}

export default Signup;
