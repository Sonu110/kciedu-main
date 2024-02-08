import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import API_ENDPOINT from '../../../config';

const StudentDetails = () => {
  const { studentId } = useParams(); 

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
    Admissiondate: '',
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
 
        const response = await fetch(`${API_ENDPOINT}/getStudent/${studentId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          const studentData = responseData.data; 
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
            Files: studentData.photo,
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div key={studentId} className="mb-6">
          <img src={formData.Files} alt={`${formData.firstName} ${formData.lastName}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            {formData.firstName} {formData.lastName}
          </h1>
          <h3 className="text-xl font-bold mb-2">
           <span>Admission_date :</span> {formData.Admissiondate}
          </h3>
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> First name: </span>{formData.firstName}</p>
          
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> last name: </span>{formData.lastName}</p>
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> course name: </span>{formData.course}</p>
          

          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> Mobile number: </span>{formData.phoneNumber}</p>
          
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> other number: </span>{formData.confirmPhoneNumber}</p>
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> occupation: </span>{formData.occupation}</p>
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> email: </span>{formData.email}</p>
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> gender: </span>{formData.gender}</p>
          
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> D O B: </span>{formData.dob}</p>
          

          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> state name: </span>{formData.state}</p>
          
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> city name: </span>{formData.city}</p>
          
          <p className="text-gray-800 mb-2 flex gap-4 items-center"> <span className=' border-2 border-solid  bg-blue-700 p-2 rounded-lg text-white'> pincode : </span>{formData.postcode}</p>
          




            <Link to={'/dashbord/student'}>
          <p className=' p-2 bg-red-600 text-white rounded-lg'>
            
             Back
             
             </p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
