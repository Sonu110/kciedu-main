import React, { useContext, useEffect, useRef } from 'react'
import course from '../Data/Course'
import { useParams } from 'react-router-dom'
import { userconetxt } from '../context/Context'
import { Button } from '@material-tailwind/react'

function Deatils() {


const {name}= useParams(null)
const {coursedata} = useContext(userconetxt)
const info = course.concat(coursedata);
const data = info.find((item) => item?.Name === name || item?.name === name);



 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  
  }, []);
  return (
   <>
   <div className="   min-h-screen  grid grid-cols-1  sm:grid-cols-2  p-16 sm:pt-32 bg-blue-50  place-content-center">

   <div  className="detailcard flex items-start flex-col    ">
        


    <div className="img max-w-[100px] ">
    <img src={data?.src || data?.Image} alt="" />
    </div>
   <div className="mb-3 flex items-center justify-between flex-wrap">
   <h3>{data?.name || data?.Name}</h3>
        
          <div
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal  break-words "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </div>
        </div>


<p>
  {data?.des}
</p>


          <a href={''} target='blank'>
          <Button size="lg" fullWidth={true} className=' flex items-center '>
          Download
    <span className=' text-yellow-900'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
    </span>
        </Button>
            </a>  
        
        
       

   </div>

   <form class="w-full shadow-lg p-5 rounded-lg bg-white ">
    <h2 className='mb-5 ml-3'>Equary From</h2>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      course Name  
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="Enter eamil"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Phone number
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="+91............."/>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
       Get site
      </button>
    </div>
  </div>
</form>

   
   
   </div>
   </>
  )
}

export default Deatils