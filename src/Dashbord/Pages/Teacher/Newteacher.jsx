import React from 'react';

const Newteacher = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Registration Form</h1>
        <form className="space-y-6">
          <div>
            <img
              src="https://source.unsplash.com/random"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-gray-800 font-bold mb-2">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
          <label htmlFor="mobile" className="block text-gray-800 font-bold mb-2">
              Status
            </label>
            <select name="" id="">
            <option value="">Active</option>
            <option value="">NoActive</option>
                
            </select>

          </div>
         
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newteacher;