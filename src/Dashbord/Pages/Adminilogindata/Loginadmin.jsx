import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { userconetxt } from '../../../context/Context';
import API_ENDPOINT from '../../../config';
import { useState } from 'react';
import Tableloading from '../../../Loader/Tableloading';

function Loginadmindata() {
const [studentloging , setstudentloging]= useState([])
const {setloginuserdata} = useContext(userconetxt)


  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/userlogin`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
  
          if (response.ok) {
           
            const adminUserData = await response.json();
            setstudentloging(adminUserData.data)
            setloginuserdata(adminUserData.data.length)
           
          } else {
            console.error("Failed to fetch admin user data:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error fetching admin user data:", error);
        }
      }
    };
  
    // Invoke the checkToken function
    checkToken();
  }, []);  // Dependency array is empty since you only want to run this once on component mount
  

  const update = async (id ,newStatus) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/adminupdate/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              isAdmin: newStatus,

            }),  // Add the data you want to update
        });

        if (response.ok) {
          const data = await response.json()
          const updatedData = studentloging.map((item) =>
          item._id === id ? { ...item, isAdmin: newStatus } : item
        );
        setstudentloging(updatedData);
            console.log("Data updated", data);
            alert("Data updated");
        } else {
            console.error("Failed to update admin user data:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error updating admin user data:", error);
    }
};

const Delect = async (id) => {
  try {
      const response = await fetch(`${API_ENDPOINT}/adminupdatedelect/${id}`, {
        method: 'DELETE',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
          },
          
      });

      if (response.ok) {
        const data = await response.json()
        setstudentloging(prevState => prevState.filter(item => item._id !== id));
          alert("Data delect");
        
      } else {
          console.error("Failed to update admin user data:", response.status, response.statusText);
      }
  } catch (error) {
      console.error("Error updating admin user data:", error);
  }
};



if(studentloging.length == 0 || setloginuserdata == null)
{
   return <Tableloading></Tableloading>
}


    
    return (


   <>
   
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <div class="bg-white p-4 rounded-md mt-4">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">Records</h2>
                <div class="my-1 font-sans font-bold ">
                  Total number of student login 
                </div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Year</th>
                            
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Time</th>

                            
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Stop</th>

                            
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Delect</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentloging.map((i)=>
                            
                            
                             i?.rolls ==='admin' && (
                              <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">{i?.Name}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-center">{i?.email}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-center">{new Date(i?.updatedAt).getFullYear()}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-right">{new Date(i?.updatedAt).toLocaleTimeString()}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-right">
                                
                                
<label class="inline-flex items-center gap-3 cursor-pointer">
{i?.isAdmin ? "On" : "Off"}


  <input type="checkbox" value="" class="sr-only peer"  onChange={() => update(i._id, !i.isAdmin)}

defaultChecked={i?.isAdmin}

  />
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
  </div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">click me</span>
</label>

                                </td>
                                <td class="py-2 px-4 border-b border-grey-light text-center bg-red-700 text-white cursor-pointer" onClick={()=> Delect(i?._id)}>Delect</td>
                              </tr>
                         
                            )
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>


        </>



    )
}

export default Loginadmindata