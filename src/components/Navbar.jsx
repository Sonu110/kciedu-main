import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userconetxt } from '../context/Context'
import {  IoMdSearch} from "react-icons/io";
import course from '../Data/Course';
import API_ENDPOINT from '../config';
function Navbars() {

    const [opennav, setnav]=useState(false)
    const [submenu , setsubmenu] = useState(false)
    const [listdata , setlistdata]= useState('')
  const {userdata ,coursedata , setuser} = useContext(userconetxt)
  console.log("the value so", userdata);
  const data = course.concat(coursedata)
  const navbarlistdata = data.filter((i) => i.name?.toLowerCase().startsWith(listdata.toLowerCase()) || i.Name?.toLowerCase().startsWith(listdata.toLowerCase()) );
  const logoutuser = async () => {
    const storedToken = localStorage.getItem('token');
    alert("yes")
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

          
        } else {
          console.error('Failed to logout admin:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during admin logout:', error);
      }
    }
  };

  return (
 
    <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full bg-white text-sm  dark:bg-gray-800 fixed left-0 right-0 top-0   ">
    <nav class=" w-full mx-auto  lg:flex lg:items-center lg:justify-between shadow-sm p-4 px-10 pb-5" aria-label="Global">
      <div class="flex items-center justify-between">
        <Link class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" to={'/'}>
        
        <span className="text-white rounded-md p-1 bg-red-500">KCI</span>
        
        Education
        </Link>
        <div class="lg:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation" onClick={()=> setnav((prev)=>!prev)}>
            <svg class={`hs-collapse-open:hidden flex-shrink-0 w-4 h-4 ${opennav ? 'hidden' : ''}`}  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class={`hs-collapse-open:block ${opennav ? '' : 'hidden'} flex-shrink-0 w-4 h-4`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div
  id="navbar-image-and-text-1"
  className={`hs-collapse   transition-all duration-300 basis-full grow lg:block z-50 ${opennav ? '' : 'hidden'}`}
>
        <div class="flex flex-col gap-1 mt-5 lg:flex-row lg:items-center sm:justify-end lg:mt-0 lg:ps-5  z-50">
          {
            [

                {
                    id:1,
                    name:"Home",
                    path:'/',
                },
                {
                    id:2,
                    name:"About",
                    path:'about',
                },
                {
                    id:3,
                    name:"Course",
                    path:'course',
                },
                {
                  id:4,
                  name:"Career",
                  path:'career',
              },
              {
                id:5,
                name:"Contact",
                path:'contact',
               },
           

            ].map((i)=>
            
            <Link to={i.path} class="font-medium text-start   text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border-r-2 border-solid border-blue-500  pl-3 pr-5 cursor-pointer" >{i.name}</Link>
            )
          }

     {userdata && userdata.data?.Name ? (
        <span className={`font-medium text-white flex justify-start    items-center bg-blue-400    min-w-20 h-9 rounded-lg cursor-pointer `}>
          {userdata.data?.isAdmin ? (
            <Link to={'/dashbord'} className=' px-3'>Admin</Link>
          ) : (
            <span className=' relative'onClick={()=> setsubmenu((prev)=>!prev)}>
              <span className='px-4'>
              {userdata.data.Name}

              </span>
            


            {userdata && userdata.data?.Name && (
              <div className={`flex p-1  mt-4 flex-col  gap-3 bg-white shadow-xl  rounded-lg absolute top-3   left-0 min-w-20 ${submenu ? '' : 'hidden'}`}>
                <Link to={'/stuentlogin'} className="text-blue-500 hover:text-blue-700  ">
                  Student
                </Link>
              
                <span onClick={logoutuser} className="text-blue-500 hover:text-blue-700">
                  Logout
                </span>
                <Link to={'/login'} className="text-blue-500 hover:text-blue-700">
                  Login
                </Link>
                <Link to={'/'} className="text-blue-500 hover:text-blue-700">
                  Home
                </Link>
              </div>
            )}
            </span>


          )}
        </span>
      ) : (
        <Link to={'/login'} className="login bg-blue-600 text-white p-2 rounded-md cursor-pointer">
          LOGIN
        </Link>
      )}
     
        </div>
      </div>




      
      <form className={` flex w-full flex-col absolute top-16 left-0 lg:hidden ${opennav ? 'hidden' : ''} `}  >

<div class="relative mb-4 flex w-full  items-stretch">
  <input
    type="search"
    class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600  dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary box-border bg-white border-t-0"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="button-addon1" 
    value={listdata}
    onChange={(e)=> setlistdata(e.target.value)}
    
    />

  <button
    class="relative z-[2] flex items-center rounded-r bg-primary px-6   leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none  bg-blue-500 focus:ring-0 active:bg-primary-800 active:shadow-lg box-border"
    type="button">
    {<IoMdSearch></IoMdSearch>}
  </button>
</div>
<ul className=' absolute right-0 left-0  top-8  max-h-96 overflow-y-scroll bg-white shadow-md' id='scrolling'>
{
 listdata.trim() !== '' && navbarlistdata.map((i)=>
  <>
  <Link to={`/details/${i?.name || i?.Name}`}>
  <li className=' p-5 shadow-md cursor-pointer' >{i?.name || i?.Name} </li>
  </Link>
  </>
  )
}
      
</ul>      
          </form>

    </nav>
  </header>
  
  )
}

export default Navbars