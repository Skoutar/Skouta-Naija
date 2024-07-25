import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let errors = {};

    // Email validation
    if (!email) {
      valid = false;
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = "Email is invalid.";
    }

    // Password validation
    if (!password) {
      valid = false;
      errors.password = "Password is required.";
    } else if (password.length <= 5) {
      valid = false;
      errors.password = "Password must be more than 5 characters.";
    }

    setErrors(errors);

    if (valid) {
      try {
        // Make the API call to fetch users
        const response = await axios.get("https://dummyjson.com/users", { timeout: 10000 });
        const users = response.data.users;

        // Check if the email and password match any user
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
          console.log("Login successful", user);
          // Redirect to /Home on successful login
          navigate("/Home");
        } else {
          setApiError("Invalid email or password.");
        }
      } catch (error) {
        console.error("Login failed", error);
        if (error.code === 'ECONNABORTED') {
          setApiError("Login request timed out. Please try again.");
        } else {
          setApiError("Login failed. Please try again later.");
        }
      }
    }
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
          {/* Social login buttons */}
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
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center mx-auto w-full sm:w-3/4 lg:w-1/2">
        <div className="relative w-full">
          <i className="bi bi-envelope-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type="email" 
            className={`w-full h-12 pl-10 pr-4 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg`} 
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="relative w-full mt-4">
          <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type={showPassword ? "text" : "password"} 
            className={`w-full h-12 pl-10 pr-4 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded-lg`} 
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i 
            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400`} 
            onClick={togglePasswordVisibility}
          ></i>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button className="mt-4 w-full h-12 px-4 bg-mainColor text-white font-medium rounded-lg">Log in</button>
        {apiError && <p className="text-red-500 text-sm mt-4">{apiError}</p>}
      </form>
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
