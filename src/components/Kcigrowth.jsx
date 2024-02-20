import React, { useEffect, useState } from 'react';

const Kcigrowth = () => {
    const [Students, setStudents]= useState(0)
    const [course, setCourse]= useState(0)
    const [Placements, setPlacements]= useState(0)
 
    useEffect(() => {
        const intervalId = setInterval(() => {

          

          if (Students < 1000 )
          {
            setStudents((prevStudents) => prevStudents + 1);
          }
         if ( course < 5000 )
         {

         
          setCourse((prevCourse) => prevCourse + 1);
         }  
         if( Placements < 3000) 
         {
            setPlacements((prevPlacements) => prevPlacements + 1);
          }
       
        }, 1);
  
        return () => clearInterval(intervalId);
    
    }, [Students, course, Placements]);




  return (
    <div className=' bg-gray-50'>
  <h3 className=' text-lg sm:text-2xl text-center pt-5 text-blue-700'>Kci Growth Scale</h3>
    <div class="antialiased h-[40vh] flex justify-evenly  items-center text-center text-gray-800 flex-wrap">
    
    <div className=' flex flex-col gap-5'>

    
    <div className=" w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center flex-col" style={{ boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }}>
      <span class="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-900" 
       >
        {Students}+
      </span>
    </div>

      <p className=' text-sm lg:text-xl'> On Going Students</p>
</div>




<div className='flex flex-col gap-5'>
<div className="w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center flex-col" style={{ boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }}>
      <span class="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-900"  
       >
        {course}+
      </span>
    </div>
      <p className=' text-sm lg:text-xl'>Total Studnet Teach</p>
</div>

<div className='flex flex-col gap-5'>
<div className="w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center flex-col" style={{ boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }}>
      <span class="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-900" 
       >
        {Placements}+
      </span>
    </div>
      <p className=' text-[0.6rem] lg:text-xl'>Placements students</p>
</div>


   
  
  </div>
    </div>
    
  );
};

export default Kcigrowth;