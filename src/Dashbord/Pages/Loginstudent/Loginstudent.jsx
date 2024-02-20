import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { userconetxt } from '../../../context/Context';
import API_ENDPOINT from '../../../config';
import { useState } from 'react';
import Tableloading from '../../../Loader/Tableloading';

function Loginstudent() {
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
            console.log("Admin User Data:", adminUserData.data);
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentloging.map((i)=>
                            
                            
                            !i?.isAdmin && (
                              <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">{i?.Name}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-center">{i?.email}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-center">{new Date(i?.updatedAt).getFullYear()}</td>
                                <td class="py-2 px-4 border-b border-grey-light text-right">{new Date(i?.updatedAt).toLocaleTimeString()}</td>
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

export default Loginstudent