import { Link } from "react-router-dom"
import course from "../../../Data/Course"
import { userconetxt } from "../../../context/Context"
import { useContext } from "react"
import API_ENDPOINT from "../../../config"

export default function Courselist() {

  
const {coursedata , setupdate} = useContext(userconetxt)
const totalnumber = coursedata.length+ course.length


 const deletedata = async (id, name) => {
    const conform = window.confirm("are you want to delete the value of", name);

    if (conform) {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/deletecourse/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            // Remove the deleted student from the state
            setupdate(true)
            alert("sucess fully")
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
    <div class="bg-white p-8 rounded-md w-full">
    <div class=" flex items-center justify-between pb-6">
        <div>
            <h2 class="text-gray-600 font-semibold ">All Course</h2>
          
        </div>
        <Link to={'/dashbord/newcourse'}>
            <button class="bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow">Add new Items </button>
            </Link>
      
        </div>
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    S.No
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Img
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Course Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  	Duration
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    	Fees
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    	See
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    	Delect
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                               course.map((item ,index)=>
                                
                            <tr key={index}>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">   {item.id}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src={item.src}
                                                alt="no image" />
                                        </div>
                                         
                                        </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">   {item.name}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {item.duration}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    ₹ {item.amount}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-blue-600 text-sm">
                                    <p class="text-white  whitespace-no-wrap">
                                   See
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-red-600 text-sm">
                                    <p class="text-white  whitespace-no-wrap">
                                   Delect
                                    </p>
                                </td>
                               
                            </tr>
                                )
                            }

{
                               coursedata.map((item ,index)=>
                                
                            <tr key={index}>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">   {totalnumber + index}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src={item.Image}
                                                alt="no image" />
                                        </div>
                                         
                                        </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">   {item.Name}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {item.Duration}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    ₹ {item.Fees}
                                    </p>
                                </td>
                                
                                <td class="px-5 py-5 border-b border-gray-200 bg-blue-600 text-sm">
                                    <p class="text-white  whitespace-no-wrap">
                                   See
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-red-600 text-sm" onClick={()=>deletedata(item._id)}>
                                
                                    <p class="text-white  whitespace-no-wrap">
                                   Delect
                                    </p>
                                </td>
                            </tr>
                                )
                            }

                            
                          
                        </tbody>
                    </table>
             
                </div>
            </div>
        </div>
    </div>
  )
}

