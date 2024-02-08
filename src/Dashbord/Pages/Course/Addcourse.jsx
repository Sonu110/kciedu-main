import React, { useContext, useState } from 'react';
import API_ENDPOINT from '../../../config';
import { userconetxt } from '../../../context/Context';

const Addcourse = () => {
  const {setupdate} = useContext(userconetxt) 
    const [courseName, setCourseName] = useState('');
    const [fees, setFees] = useState('');
    const [duration, setDuration] = useState('');
   const  [Descriptions, setDescriptions] = useState('')
    const [image, setImage] = useState(null);
    const [pdf, setPdf] = useState(null);
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
  
    };
  
    const handlePdfChange = (e) => {
      setPdf(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();

        formData.append('courseName', courseName);
        formData.append('fees', fees);
        formData.append('duration', duration);
        formData.append('Descriptions', Descriptions);
        
        formData.append('image', image); // Ensure 'image' is the field name
    formData.append('pdf', pdf); 
  
        const response = await fetch(`${API_ENDPOINT}/course`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add your authentication token
          },
          body: formData,
        });
       
  
        if (response.ok) {
          alert("Success full");
          setupdate(true)
          console.log('Course added successfully');
          // Add any additional logic after successful submission
        } else {
          alert("Success not full");
          console.error('Failed to add course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div className="flex justify-center items-center p-10 bg-gray-200 ">
      <div className="bg-white p-8 rounded-lg shadow-lg   w-10/12 sm:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Add Course</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="courseName" className="block text-gray-800 font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter course name"
            />
          </div>
          <div>
            <label htmlFor="fees" className="block text-gray-800 font-bold mb-2">
              Fees
            </label>
            <input
              type="text"
              id="fees"
              name="fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter course fees"
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-gray-800 font-bold mb-2">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter course duration"
            />
          </div>
          <div>
            <label htmlFor="Descriptions" className="block text-gray-800 font-bold mb-2">
              Descriptions
            </label>
            <textarea
              
              id="Descriptions"
              name="Descriptions"
              value={Descriptions}
              onChange={(e) => setDescriptions(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter course duration"
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
       
              onChange={handleImageChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter course image URL"
            />
          </div>
          <div>
            <label htmlFor="Pdf" className="block text-gray-800 font-bold mb-2">
              Pdf
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              onChange={handlePdfChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcourse;