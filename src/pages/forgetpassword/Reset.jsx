import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Reset = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="bg-white mt-5 w-full min-h-screen mb-12 p-4 sm:p-8 md:p-12">
      <Link to='/' className="block w-6 h-6 mt-12 ml-auto"><i className="bi bi-x-lg"></i></Link>
      <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-1/2 mx-auto mt-24">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Change your password</h1>
        <p className="w-full sm:w-3/4 lg:w-2/3 text-base sm:text-lg text-center mt-2">
          Please enter a new password that is different from the previously existing one.
        </p>
        <div className="relative w-full mt-10">
          <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type={passwordVisible ? "text" : "password"} 
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg" 
            placeholder="Enter New Password" 
          />
          <i 
            onClick={togglePasswordVisibility} 
            className={`bi ${passwordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
          ></i>
        </div>
        <div className="relative w-full mt-4">
          <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type={confirmPasswordVisible ? "text" : "password"} 
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg" 
            placeholder="Confirm Password" 
          />
          <i 
            onClick={toggleConfirmPasswordVisibility} 
            className={`bi ${confirmPasswordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
          ></i>
        </div>
        <Link to='/'>
          <button className="mt-10 w-full h-12 px-4 bg-mainColor text-white font-medium rounded-lg">Change password</button>
        </Link>
      </div>
    </div>
  );
}

export default Reset;
