import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <>
      <div className="bg-[#FFDEDE] flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="Placeholder Image" className="object-cover w-full h-6xl mt-16" />
        </div>

        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-6 text-blue-500">
              <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
          </form>

          <div className="mt-6 text-blue-500 text-center">
            <Link to="/login" className="hover:underline">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
