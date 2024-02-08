import React, { useContext, useEffect, useRef, useState } from 'react'
import Cards from '../components/Card'
import course from '../Data/Course'
import video2 from '../assests/video2.mp4'
import Typed from "typed.js";
import { userconetxt } from '../context/Context';
import { Link } from 'react-router-dom';
function Course() {


  const el = useRef(null);
  const [listdata , setlistdata]= useState('')
  const {coursedata} = useContext(userconetxt)
  const data = course.concat(coursedata)
  console.log("dtasdas", data);
  const navbarlistdata = data.filter((i) => i.name?.toLowerCase().startsWith(listdata.toLowerCase()) || i.Name?.toLowerCase().startsWith(listdata.toLowerCase()) );





  useEffect(() => {
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
 
    const typed = new Typed(el.current, {
      strings: ["the best course", "the best price","the best placement"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
  
  
    // Destroying
    return () => {
      typed.destroy();
    };
    }
 , []); 
  

  return (
    <>
    
    <div className="relative w-full  ">
    <div className="relative">
    <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
       
     <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7  w-full  absolute top-0 left-0 right-0 bottom-0  flex items-center">
  <div className="flex flex-col lg:w-6/12">
    <h1 className="font-bold text-4xl text-blue-700 md:text-5xl lg:w-10/12">
      Find <span ref={el}></span>
    </h1>
    <form action="" className="w-full mt-10">
      <div className="relative flex p-1 rounded-full bg-white border border-blue-200 shadow-md md:p-2 max-h-min">
        <input
          placeholder="Your favorite food"
          className="w-full p-4 rounded-full"
          type="text"
          value={listdata}
          onChange={(e)=> setlistdata(e.target.value)}
        />
        <button
          type="button"
          title="Start buying"
          className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-blue-200 to-blue-300 hover:to-red-300 active:from-blue-400 focus:from-red-400 md:px-12 flex"
        >
          <span className="hidden text-blue-900 font-semibold sm:block">
            Search
          </span>
        </button>
        <ul className=' absolute right-0 left-0   top-16 rounded-lg  max-h-96 overflow-y-scroll bg-white shadow-md' id='scrolling'>
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
      </div>
    </form>
    <p className="mt-8 text-white lg:w-10/12 text-sm md:text-base">
      Sit amet consectetur adipisicing elit.{" "}
      <a href="#" className="text-blue-700">
        connection
      </a>{" "}
      tenetur nihil quaerat suscipit, sunt dignissimos.
    </p>
  </div>
</div>
</div>
</div>
    


<div className='md:p-28 sm:p-16 p-10' >

  <h2 className='text-3xl capitalize font-serif font-bold' >Our All course</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
{
data.map((i) => (
  <Cards key={i?.id || i?._id} name={i?.name || i?.Name} des={i?.des || i?.Descriptions} src={i?.src || i?.Image} flag={true}></Cards>
))


}



    </div>



  

</div>



</>

  )
}


export default Course