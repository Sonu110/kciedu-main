import React, { useEffect, useState } from 'react';
import API_ENDPOINT from '../../../config';
import { Link, useParams } from 'react-router-dom';
const TeacherRecord = () => {

  const [teacher , setdata ] = useState({})
  const [Loading , setLoading] = useState(true)
  const {id} = useParams()
  console.log("the id is ", teacher);
  useEffect(()=>{
  
  const teacherdata =async ()=>{
  
  
  
      try {
      
          const response = await fetch(`${API_ENDPOINT}/staffdata/${id}`, {
          
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              },
            });
     
          if(response.ok)
          {
              const Teacher = await response.json();
              setdata(Teacher.data)
              console.log("then vhsagdhjsadaskd ad",Teacher.data);
  
          }
  
      } catch (error) 
      {
      console.log("erorr");
      }
      finally
      {
          setLoading(false)
  
      }
  
  }
  
  teacherdata()
  
  },[])
  
  

  return (
    <div className='bg-gray-50 min-h-screen p-10'>

    <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden ">
      <img className="w-full h-56 object-cover object-center" src={teacher?.Image} alt={teacher?.Name}  />
      <div className="p-4">
        <h2 className="text-xl font-bold">{teacher?.Name}</h2>
        <p className="text-sm text-gray-600 mb-2">Knowledge: {teacher?.knowledge}</p>
        <p className="text-sm text-gray-600 mb-2">Mobile: {teacher?.Mobile}</p>
        <p className="text-sm text-gray-600 mb-2">Address: {teacher?.Address}</p>
        
        <p className="text-sm text-gray-600 mb-2">Join Date: {teacher?.Joindate}</p>
        <p className="text-sm text-gray-600 mb-2">Gender: {teacher?.Gender}</p>
        <p className="text-sm text-gray-600 mb-2">Branch: {teacher?.Branch}</p>
        
        <p className="text-sm text-gray-600 mb-2">Salary: ₹{teacher?.Salary}</p>
        <p className="text-sm text-gray-600 mb-2">Date of Brith: {teacher?.dob}</p>
    <Link to={'/dashbord/staff'}>

        <p className="text-sm text-white bg-red-500 p-3 rounded-md mb-2"> Back </p>
    </Link>

        
      </div>
    </div>
    </div>
  );
};

export default TeacherRecord;