import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white mt-5 w-full min-h-screen mb-12 p-4 sm:p-8 md:p-12">
      <Link to='/' className="block w-6 h-6 mt-12 ml-auto"><i className="bi bi-x-lg"></i></Link>
      <p className="mt-8 text-center sm:text-right text-base sm:text-lg">
        Dont have an account? <Link to='/signup' className="text-mainColor">Signup</Link>
      </p>
      <div className="mt-24 flex flex-col items-center justify-center mx-auto w-full sm:w-3/4 lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Welcome back</h1>
        <p className="mt-2 text-base sm:text-lg text-center">Please enter your details to proceed</p>
        
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
            <img className="w-6 h-6 " src="images/apple2..png" alt="Apple" />
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
            type={showPassword ? "text" : "password"} 
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg" 
            placeholder="Enter Password" 
          />
          <i 
            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400`} 
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <button className="mt-4 w-full h-12 px-4 bg-mainColor text-white font-medium rounded-lg">Log in</button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center mr-4">
          <input type="checkbox" id="rememberMe" className="mr-2 w-6 h-6" />
          <label htmlFor="rememberMe" className="font-medium">Remember me</label>
        </div>
        <Link to='/forgetpassword' className="ml-8 md:ml-20 text-mainColor">Forget Password?</Link>
      </div>
    </div>
  );
}

export default Login;
