import { useState } from "react";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white w-full h-full mt-20 mb-50">
      <Link to="/" className="block w-6 h-6 mt-12 ml-auto"><i className="bi bi-x-lg"></i></Link>
      <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-1/2 mx-auto mt-24">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Forget password?</h1>
        <p className="w-full sm:w-3/4 lg:w-2/3 text-base sm:text-lg text-center mt-2">
          Enter the email address associated with your account, and we’ll email you a link with instructions to reset your password.
        </p>
        <div className="relative w-full mt-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg"
            placeholder="Enter Email"
          />
          <i className="bi bi-envelope-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
        <Link to='/checkemail'>
          <button className="mt-10 w-full h-12 px-4 bg-mainColor text-white font-medium rounded-lg">Reset password</button>
        </Link>
      </div>
    </div>
  );
}

export default Forgetpassword;
