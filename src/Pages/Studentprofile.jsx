import React, { useContext } from 'react';
import { userconetxt } from '../context/Context';
import API_ENDPOINT from '../config';
import { useNavigate } from 'react-router-dom';

const StudentProfilePage = () => {

 const {kcistuentdata}= useContext(userconetxt)
 const navigate = useNavigate();
  const calculateExamSection = () => {
    const admissionDate = new Date(kcistuentdata.Admission_date);
    const courseDuration = 6; // Assuming the course duration is 6 months
    const examDate = new Date(admissionDate.setMonth(admissionDate.getMonth() + courseDuration));
    const currentDate = new Date();

    const daysLeft = Math.floor((examDate - currentDate) / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? `Exam in ${daysLeft} days` : 'Exam already passed';
  };

  const cheakstuent =async ()=>{
    
    const cheak = window.confirm("are you ant to logout")
    if(cheak)
    {

    
    const kcistuentdata = localStorage.getItem('kcistuent')

    if(kcistuentdata)
    {
      try {
        const response = await fetch(`${API_ENDPOINT}/logout`, {
          method: 'GET',
        });

        if (response.ok) {
          
          localStorage.removeItem('kcistuent');
          navigate('/');
          
        } else {
          console.error('Failed to logout admin:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during admin logout:', error);
      }
    }
  }
  }


  return (
    <div className="flex flex-col items-center justify-center  p-28  min-h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
        <img src={kcistuentdata.photo} alt='no' className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
        <div>
            <strong>Firstname Name:</strong> {kcistuentdata.firstname}
          </div>
          <div>
            <strong>lastname Name:</strong>  {kcistuentdata.lastname}
          </div>
          
          <div>
            <strong>Username:</strong> {kcistuentdata.username}
          </div>
          
          <div>
            <strong>stuendtId:</strong> {kcistuentdata.StudentID}
          </div>
          
          <div>
            <strong>Password:</strong> {kcistuentdata.password}
          </div>
          
          
          <div>
            <strong>Username:</strong> {kcistuentdata.username}
          </div>
          <div>
            <strong>Email:</strong> {kcistuentdata.Email}
          </div>
          <div>
            <strong>Address:</strong> {kcistuentdata.Address}, {kcistuentdata.City}, {kcistuentdata.State}, {kcistuentdata.Postcode}
          </div>
          <div>
            <strong>Mobile Number:</strong> {kcistuentdata.Mobilenumber}
          </div>
          <div>
            <strong>Other Number:</strong> {kcistuentdata.confirmnumber}
          </div>
          <div>
            <strong>Occupation:</strong> {kcistuentdata.Occupation}
          </div>
          <div>
            <strong>Course:</strong> {kcistuentdata.course}
          </div>
          <div>
            <strong>Admission Date:</strong> {kcistuentdata.Admission_date}
          </div>
          <div>
            <strong>Exam Section:</strong> {calculateExamSection()}
          </div>
          <div className=' bg-red-700 p-3 rounded-lg text-white' onClick={cheakstuent}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;