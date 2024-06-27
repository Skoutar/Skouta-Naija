import { Link } from "react-router-dom";

const Comfirm = () => {
  return (
    <div className="bg-white mt-5 w-full h-full mb-12">
      <div className="relative flex justify-end p-4">
        <Link to="/" className="w-6 h-6">
          <i className="bi bi-x-lg"></i>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:w-4/5 lg:w-2/3 mx-auto mt-24 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Thank you!</h1>
        <p className="text-base sm:text-lg text-center mt-4">
          Please check your email. Your verification link has been sent.
        </p>
        <button className="mt-10 w-40 h-12 bg-mainColor text-white font-medium rounded-lg">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Comfirm;
