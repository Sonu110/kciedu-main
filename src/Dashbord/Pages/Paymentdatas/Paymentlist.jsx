import React, { useEffect, useState } from 'react';
import API_ENDPOINT from '../../../config';
import { Link } from 'react-router-dom';

const Paymentlist = () => {
 
  const [data, setdata] = useState([])

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        
          const response = await fetch(`${API_ENDPOINT}/allpaymentreceipt`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
    
          if (response.ok) {
            const studentData = await response.json();
            // Update form fields with the retrieved student data
           setdata(studentData.data)
            console.log("aghdaghdasdhghasd asfhvghsdafsdf",studentData.data );
            // Set payment history using the paymentsData property of studentData
          
          } else {
            console.error('Failed to fetch student data');
          }
       
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

    fetchStudentData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the format as needed
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(); // Adjust the format as needed
  };

  
  return (
    <div className=" min-h-screen bg-gray-100">

<div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-gray-600 font-semibold">All students data</h2>
          <span className="text-xs">All student current data</span>
        </div>
      
        <div className="flex items-center justify-between">
        <form action="">
        <div className="flex bg-gray-150 items-center p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            className="bg-gray-50 outline-none ml-1 p-2 block border-2 border-solid border-blue-300 rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Search..."
         
          />
        </div>
      </form>
        </div>
      </div>


      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Edit</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Student ID</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Name</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Course</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Receipt Number</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Receipt Date</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Receipt time</th>
            
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Fees</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} data-title={item.note}>
              <td className="py-4 px-6 border-b border-gray-300">
                <Link to={`/dashbord/paymentupdate/${item._id
}`}>
                <button className="text-blue-500">Edit</button>
                </Link>
              </td>
              <td className="py-4 px-6 border-b border-gray-300">{item.studentId}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.studentName}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.selectCourse}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.receiptNo}</td>
              <td className="py-4 px-6 border-b border-gray-300">{formatDate(item.createdAt)}</td>
              <td className="py-4 px-6 border-b border-gray-300">{formatTime(item.createdAt)}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.paymentAmount}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.paymentMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paymentlist;



