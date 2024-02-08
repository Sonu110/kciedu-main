import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_ENDPOINT from '../../../config';
import Tableloading from '../../../Loader/Tableloading';
import { userconetxt } from '../../../context/Context';

function Studentlist() {
  const { setstudentdata } = useContext(userconetxt);
  const [newstudentdata, setnewstudnetdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState("Choose group");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          let apiUrl = `${API_ENDPOINT}/Allstudentdata?page=${currentPage}&pageSize=${pageSize}`;

          if (searchTerm) {
            apiUrl = `${API_ENDPOINT}/searchStudents?searchTerm=${encodeURIComponent(searchTerm)}`;
          }

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setnewstudnetdata(data.data);
            setTotalPages(Math.ceil(data.total / pageSize));
            setstudentdata(data.total);
          } else {
            console.log("Error: Something went wrong");
          }
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      }
    };

    fetchData();
  }, [currentPage, pageSize, searchTerm, setstudentdata]);


  const handleDelete = async (id, name) => {
    const conform = window.confirm("are you want to delete the value of", name);

    if (conform) {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/deleteStudent/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            // Remove the deleted student from the state
            setnewstudnetdata((prevData) => prevData.filter((student) => student._id !== id));
          } else {
            console.log("Error: Something went wrong");
          }
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      }
    }
  };

  if (newstudentdata.length === 0 || newstudentdata === null) {
    return <Tableloading></Tableloading>;
  }

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">All students data</h2>
          <span className="text-xs">All student current data</span>
        </div>
        <Link to={'/dashbord/newstudent'}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add new Items </button>
        </Link>
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
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
        </div>
      </form>
        </div>
      </div>

      <div className="flex justify-end items-center gap-3">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select
          id="countries"
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
      
            setCurrentPage(parseInt(e.target.value)); // Reset to the first page when changing the page size
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Choose group">Choose group</option>
          {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          
        </select>
      </div>

      <div className="bg-gray-200 p-4 overflow-scroll min-h-screen">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Photo</th>
              <th className="py-2 px-4 border-b border-gray-300">First Name</th>
           
              <th className="py-2 px-4 border-b border-gray-300">Course</th>
              <th className="py-2 px-4 border-b border-gray-300">Mobile Number</th>
   
              <th className="py-2 px-4 border-b border-gray-300">Gender</th>
              <th className="py-2 px-4 border-b border-gray-300">Student ID</th>
              <th className="py-2 px-4 border-b border-gray-300">Username</th>
              <th className="py-2 px-4 border-b border-gray-300">Password</th>
              <th className="py-2 px-4 border-b border-gray-300">Status</th>
              <th className="py-2 px-4 border-b border-gray-300">Admission Date</th>
              <th className="py-2 px-4 border-b border-gray-300">See profile</th>
              
              <th className="py-2 px-4 border-b border-gray-300">Delete</th>
              <th className="py-2 px-4 border-b border-gray-300">Update</th>
            </tr>
          </thead>
          <tbody>
            {newstudentdata.map((student, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">
                  <img src={student.photo} alt="Student" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4">{student.firstname}</td>
                {/* <td className="py-2 px-4">{student.lastname}</td> */}
                <td className="py-2 px-4 text-center">{student.course}</td>
                <td className="py-2 px-4">{student.Mobilenumber}</td>
               
                <td className="py-2 px-4">{student.Gender}</td>
                <td className="py-2 px-4">{student.StudentID}</td>
                <td className="py-2 px-4">{student.username}</td>
                <td className="py-2 px-4">{student.password}</td>
                <td className={`py-2 px-4 ${student.Status ?" bg-green-400 text-white" :" ring-deep-orange-500"} `}>{student.Status ? 'Active' : 'Inactive'}</td>
                <td className="py-2 px-4">{student.Admission_date}</td>
                <td className="py-2 px-4   bg-blue-800 text-white"> <Link to={`/dashbord/student/${student._id}`}>See Profile</Link></td>
                
                <td className="py-2 px-4 p-1 bg-red-600">
                  <button onClick={() => handleDelete(student._id, student.firstname)} className='text-white' >Delete</button>
                </td>
                <td className="py-2 px-4 p-1 bg-blue-500">
                  <Link to={`/dashbord/updatestudent/${student._id}`} className="text-white">Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Studentlist;
