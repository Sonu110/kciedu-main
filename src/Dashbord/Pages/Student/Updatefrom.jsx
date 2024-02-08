import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import API_ENDPOINT from '../../../config';
import { userconetxt } from '../../../context/Context';
import course from '../../../Data/Course';

const UpdateStudentForm = () => {

    const {studentId} = useParams(null)

    const {coursedata}= useContext(userconetxt)
    const data = course.concat(coursedata)
    console.log("the value of data ", data);

console.log("the value of ", studentId);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '',
    phoneNumber: '',
    confirmPhoneNumber: '',
    email: '',
    dob: '',
    gender: '',
    occupation: '',
    state: '',
    city: '',
    postcode: '',
    address: '',
    Files: null,
    Admissiondate :'',
  });


  console.log("the of from daa", formData);

  useEffect(() => {
    const fetchStudentData = async () => {
        try {
          // Fetch student data using the provided studentId
          const response = await fetch(`${API_ENDPOINT}/getStudent/${studentId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            const studentData = responseData.data; // Access the 'data' property
            console.log("the student data value", studentData);
      
            setFormData({
              firstName: studentData.firstname,
              lastName: studentData.lastname,
              course: studentData.course,
              phoneNumber: studentData.Mobilenumber,
              confirmPhoneNumber: studentData.confirmnumber,
              email: studentData.Email,
              dob: studentData.Date_of_brith,
              gender: studentData.Gender,
              occupation: studentData.Occupation,
              state: studentData.State,
              city: studentData.City,
              postcode: studentData.Postcode,
              address: studentData.Address,
              Admissiondate: studentData.Admission_date,
              Files: studentData.photo
              ,
            });
          } else {
            console.error('Error fetching student data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

    if (studentId) {
      fetchStudentData();
    }
  }, [studentId]);

  const handleChange = (e) => {
    if (e.target.name === 'Files') {
      setFormData({ ...formData, Files: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObj = new FormData();
      formDataObj.append('firstName', formData.firstName);
      formDataObj.append('lastName', formData.lastName);
      formDataObj.append('course', formData.course);
      formDataObj.append('phoneNumber', formData.phoneNumber);
      formDataObj.append('confirmPhoneNumber', formData.confirmPhoneNumber);
      formDataObj.append('email', formData.email);
      formDataObj.append('dob', formData.dob);
      formDataObj.append('gender', formData.gender);
      formDataObj.append('occupation', formData.occupation);
      formDataObj.append('state', formData.state);
      formDataObj.append('city', formData.city);
      formDataObj.append('postcode', formData.postcode);
      formDataObj.append('address', formData.address);
      formDataObj.append('Files', formData.Files);
        console.log("the value of from data", formData.Files);
      // Update student data using the provided studentId
      const response = await fetch(`${API_ENDPOINT}/updateStudent/${studentId}`, {
        method: 'PUT',
        body: formDataObj,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        console.log('Student data updated successfully');
        alert('Data updated');
      } else {
        console.error('Failed to update student data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      course: '',
      phoneNumber: '',
      confirmPhoneNumber: '',
      email: '',
      dob: '',
      gender: '',
      occupation: '',
      state: '',
      city: '',
      postcode: '',
      address: '',
      Files: null,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-9">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Update Student Form</h1>
        <h2 className="text-2xl font-bold mb-4">Addmission date {formData.Admissiondate}</h2>
        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-800 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-800 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
          <label htmlFor="course" className="block text-gray-800 font-bold mb-2">
              Course
            </label>
            <select
              id="course"
              name="course"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
            {
              data.map((i)=>
              
              
              <option value={i?.name || i?.Name}>{i?.name || i?.Name}</option>
              )
            }
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">

          <div>
            <label htmlFor="phoneNumber" className="block text-gray-800 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPhoneNumber" className="block text-gray-800 font-bold mb-2">
              Confirm Phone Number
            </label>
            <input
              type="text"
              id="confirmPhoneNumber"
              name="confirmPhoneNumber"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Confirm phone number"
              value={formData.confirmPhoneNumber}
              onChange={handleChange}
            />
          </div>
          </div>
          <div>
          

<label htmlFor="email" className="block text-gray-800 font-bold mb-2">
  email
</label>
            <input
  type="email"
  id="email"
  name="email"
  className="w-full border border-gray-300 p-2 rounded-lg"
  placeholder="Enter email"
  value={formData.email}
  onChange={handleChange}
/>

          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-800 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-800 font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div>
            <label htmlFor="occupation" className="block text-gray-800 font-bold mb-2">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="state" className="block text-gray-800 font-bold mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-800 font-bold mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="postcode" className="block text-gray-800 font-bold mb-2">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter postcode"
                value={formData.postcode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-800 font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="File" className="block text-gray-800 font-bold mb-2">
              Image
            </label>
            <input
  type="file"
  id="File"
  name="Files"  // Change 'File' to 'Files' to match the state key
  className="w-full border border-gray-300 p-2 rounded-lg"

  onChange={handleChange}
/>
</div>
          <div className="flex justify-between flex-wrap">
            <button
              type="submit"
              className="rounded-3xl bg-blue-500 px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Update
            </button>
            <button
              type="button"
              className="rounded-3xl bg-gray-500 px-6 py-2 text-xl font-medium uppercase text-white"
              onClick={handleReset}
            >
              Reset
            </button>
            <Link to="/dashbord/student">
              <button
                type="button"
                className="rounded-3xl bg-red-500 px-6 py-2 text-xl font-medium uppercase text-white"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
