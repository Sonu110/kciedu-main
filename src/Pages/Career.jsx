import React, { useEffect, useState } from 'react'
import API_ENDPOINT from "../config"
import Tableloading from '../Loader/Tableloading';

function Career() {

  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
  
  }, []);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        
          const response = await fetch(`${API_ENDPOINT}/placement`, {

          });
    
          if (response.ok) {
            const studentData = await response.json();
           console.log(studentData);
           setdata(studentData.data)
            
            // Set payment history using the paymentsData property of studentData
          
          } else {
            console.error('Failed to fetch student data');
          }
       
      } catch (error) {
        console.error('Error:', error);
      }
      finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    

    fetchStudentData();
  }, []);

  

  if(loading)
  {
    return <Tableloading></Tableloading>
  }



  return (
    <div className='  bg-gray-50 min-h-screen'>






<h1 class="flex items-center text-3xl pt-28  justify-center font-extrabold dark:text-white">Job hai <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>
       {
        data.map((item,value)=>
        
        
        <div class=" w-full  pt-5">
        <div class="group  grid min--w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto  bg-white">
    <a href="#" class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
      <div class="group relative h-16 w-16 overflow-hidden rounded-lg">
        <img src={item.imageUrl} alt="" class="h-full w-full object-cover text-gray-700" />
      </div>
    </a>
    <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 class="text-sm text-gray-600">Invision</h3>
      <h3 href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> {item.jobName}</h3>
      <p class="overflow-hidden pr-7 text-sm">{item.description}</p>

   
      <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> {item.experience} year</span></div>
        <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">₹{item.salary}</span></div>
        <button type="button" class="py-2.5 min-w-[200px] mt-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Apply</button>
      </div>
    
    </div>

  </div>



        </div>
        
        )
       }


    </div>
  )
}

export default Career