import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import course from "../../../Data/Course"
import API_ENDPOINT from '../../../config';
import Tableloading from "../../../Loader/Tableloading";
import { userconetxt } from "../../../context/Context";
export default function Teacherlist() {
const {setteachers} = useContext(userconetxt)
const [data , setdata ] = useState({})
const [Loading , setLoading] = useState(true)

useEffect(()=>{

const teacherdata =async ()=>{



    try {
    
        const response = await fetch(`${API_ENDPOINT}/staffdata`, {
        
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
   
        if(response.ok)
        {
            const Teacher = await response.json();
            setdata(Teacher.data)
            setteachers(Teacher.data.length)
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

const handleDelete = async (id, name) => {
    const conform = window.confirm("are you want to delete the value of", name);

    if (conform) {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/deleteteacher/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            // Remove the deleted student from the state
            setdata((prevData) => prevData.filter((student) => student._id !== id));
          } else {
            console.log("Error: Something went wrong");
          }
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      }
    }
  };



if(Loading)
{
  return <Tableloading></Tableloading>
}



  return (
    <div class="bg-white p-8 rounded-md w-full">
    <div class=" flex items-center justify-between pb-6">
        <div>
            <h2 class="text-gray-600 font-semibold ">All Staff Recourds</h2>
          
        </div>
        <Link to={'/dashbord/newteacher'}>
            <button class="bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow">Add new Items </button>
            </Link>
      
        </div>
        <div>
        <div className="  w-full  ">
      <table className=" w-full">
        <thead>
          <tr>
          <th className="px-4 py-2">Sno</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Knowledge</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Join Date</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">See</th>
            <th className="px-4 py-2">Delect</th>
         
          </tr>
        </thead>
        <tbody>
          {data.map((teacher, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index+1}</td>
              <td className="border px-4 py-2">
                <img src={teacher.Image} alt={teacher.Name} className="w-16 h-16 object-cover rounded-full" />
              </td>
              <td className="border px-4 py-2">{teacher.Name}</td>
              <td className="border px-4 py-2">{teacher.knowledge}</td>
              <td className="border px-4 py-2">{teacher.Mobile}</td>
              <td className="border px-4 py-2">{teacher.Address}</td>
              <td className="border px-4 py-2">{teacher.Joindate}</td>
              <td className="border px-4 py-2">₹ {teacher.Salary}</td>
             

              <td className="border px-4 py-2  bg-blue-300 text-white">
              <Link to={`/dashbord/teacherdetails/${teacher._id}`}>
              
              See Profile
              </Link>
              </td>
              <td className="border px-4 py-2 bg-red-800 text-white" onClick={()=> handleDelete(teacher._id)}>
              
              
              Detect
              
              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
  )
}

