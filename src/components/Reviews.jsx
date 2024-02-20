import React, { useState } from 'react'

function Reviews({img, name, feild, des}) {
  

  const [display , setdisplay] =useState(false)
  
  
  
  
  return (
   
       



<div  className=' flex flex-wrap justify-evenly gap-4'>
 


  <div class=" md:mb-0 w-[400px] shadow-md  ">
  <div class=" flex justify-center">
    <img src={img}
      class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
  </div>
  <h5 class=" text-lg font-bold">{name}</h5>
  <h6 class=" font-medium text-primary dark:text-primary-400">
    {feild}s
  </h6>
  <p class="mb-4 break-words text-wrap p-5  text-sm sm:text-[1rem]">
  {display ? des : des.length > 100 ? des.slice(0, 100) + '...' : des}
   {/* {display ? des : des.length > 100 ? des.slice(0, 100) + "..." : des } */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
      <path fill="currentColor"
        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
    </svg>
  </p>
  <ul class="mb-0 flex justify-center   text-yellow-800 ">
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    </li>
  </ul>

    <div className=' mt-4 mb-5 border-b border-solid  border-deep-orange-300'>
     <span className=' text-blue-800 border-b border-solid  border-blue-800  cursor-pointer' onClick={()=> setdisplay(!display)}>

     Read more
     </span> 
    </div>



</div>

</div>
   

  )
}

export default Reviews