import React from 'react';

const Placement = () => (
  <div className="flex flex-col items-center p-5 justify-center min-h-screen bg-gray-200">
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Job Placement Form</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="jobName" className="block text-gray-800 font-bold mb-2">
            Job Name
          </label>
          <input
            type="text"
            id="jobName"
            name="jobName"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter job name"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-800 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter job description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="experience" className="block text-gray-800 font-bold mb-2">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter required experience"
          />
        </div>
        <div>
          <label htmlFor="salary" className="block text-gray-800 font-bold mb-2">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter salary range"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-800 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Placement;
