import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userconetxt } from '../../context/Context';
import API_ENDPOINT from '../../config';

function Massage() {

    const {setuser ,setuserdata } = useContext(userconetxt);
   
    
      const logoutAdmin = async () => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          try {
            const response = await fetch(`${API_ENDPOINT}/logout`, {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            });
  
            if (response.ok) {
              setuser(null);
              localStorage.removeItem('token');
              setuserdata({});
              
            } else {
              console.error('Failed to logout admin:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Error during admin logout:', error);
          }
        }
      };
  
      
  

  return (
   



    <div class="relative p-4 w-full h-screen ">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md  left-1/4  top-1/4">
         
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want Exit</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={ logoutAdmin}>
                    Yes, I'm sure
                </button>
                <Link to={'/dashbord'}> 
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                </Link>
            </div>
        </div>
    </div>


  )
}

export default Massage