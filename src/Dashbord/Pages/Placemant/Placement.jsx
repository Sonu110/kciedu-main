import React, { useState } from 'react';
import API_ENDPOINT from '../../../config';
const Placement = () =>
{

  const [formData, setFormData] = useState({
    jobName: '',
    description: '',
    experience: '',
    salary: '',
    image: null, // This will store the selected file
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formDataToSend = new FormData();
    formDataToSend.append('jobName', formData.jobName);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('salary', formData.salary);
    formDataToSend.append('image', formData.image);  // Correct field name 'image'

    console.log("jgsdfsdf", formData.image);

    try {
      const response = await fetch(`${API_ENDPOINT}/placement`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  

      if (response.ok) {
        console.log('Job placement submitted successfully!');
        alert("Job placement submitted successfully!")
        // You can redirect or handle success as needed
      } else {
        console.error('Failed to submit job placement.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


return(

  




  <div className="flex flex-col items-center p-5 justify-center min-h-screen bg-gray-200">
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Job Placement Form</h1>
      <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-800 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"   // Change this to 'image'
            name="image" // Change this to 'image'
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter image URL"
            onChange={handleChange}
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
)};

export default Placement;
