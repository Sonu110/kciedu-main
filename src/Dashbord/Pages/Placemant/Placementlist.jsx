import React, { useEffect, useState } from 'react';
import API_ENDPOINT from '../../../config';
import { Link } from 'react-router-dom';

const Placementlist = () => {
 
  const [data, setdata] = useState([])
  const [Delete,setdelete]= useState(false)
  
  
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        
          const response = await fetch(`${API_ENDPOINT}/placement`, {
        
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
    
          if (response.ok) {
            const studentData = await response.json();
           console.log(studentData);
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
  }, [Delete]);


  
  const handleDelete = async (id, name) => {
    const conform = window.confirm("are you want to delete the value of", name);

    if (conform) {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/placement/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            alert("yes successs")
            setdelete(true)
          } else {
            console.log("Error: Something went wrong");
          }
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      }
    }
  };



  
  return (
    <div className="flex flex-col p-1 mt-16 min-h-screen bg-gray-200">
        
        <div class=" flex items-center justify-between pb-6">
        <div>
            <h2 class="text-gray-600 font-semibold ">All Career</h2>
          
        </div>
        <Link to={'/dashbord/placement'}>
            <button class="bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow">Add new Items </button>
            </Link>
      
        </div>
      
      
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
          <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Image</th>
            <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Job Name</th>
            <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Description</th>
            <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Experience</th>
            <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Salary</th>
            <th className="py-3 px-6 bg-gray-800 text-white font-bold uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
            <td className="px-4 py-2">
                <img src={item.imageUrl} alt={item.jobName} className="w-10 h-10 rounded-full" />
              </td>
              <td className="py-4 px-6 border-b border-gray-200">{item.jobName}</td>
              <td className="py-4 px-6 border-b border-gray-200">{item.description}</td>
              <td className="py-4 px-6 border-b border-gray-200">{item.experience}</td>
              <td className="py-4 px-6 border-b border-gray-200">{item.salary}</td>
              <td className="py-4 px-6 border-b border-gray-200">
              <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700" >Delete</button>
   
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Placementlist;



