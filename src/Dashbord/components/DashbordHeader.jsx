import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
function DashbordHeader() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   const [stuentsubmenu, setstuentsubmenu] = useState(false);
   const [examsubmenu, setexamsubmenu] = useState(false);

   const location = useLocation();
   const currentPath = location.pathname;
   const lastPartOfUrl = currentPath.substring(currentPath.lastIndexOf('/') + 1);

   // Convert only the first letter to uppercase
   const capitalizedLastPart = lastPartOfUrl.charAt(0).toUpperCase() + lastPartOfUrl.slice(1) || "Dashbord";



   return (


      <div>
         <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
               <div class="flex items-center justify-between ">
                  <div class="flex items-center justify-start">


                     <button
                        onClick={toggleSidebar}
                        id="toggleSidebarMobile"
                        aria-expanded="true"
                        aria-controls="sidebar"
                        className="mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                     >
                        <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                     </button>



                     <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
                        <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo" />
                        <span class="self-center whitespace-nowrap">{capitalizedLastPart}</span>
                     </a>


                  </div>

               </div>
            </div>
         </nav>



         <div className="flex overflow-hidden bg-white pt-16">
            <aside
               id="sidebar"
               className={`fixed ${isSidebarOpen ? 'lg:flex' : 'hidden lg:hidden'
                  } z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
               aria-label="Sidebar"
            >
               <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                  <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                     <div className="flex-1 px-3 bg-white divide-y space-y-1">
                        <ul className="space-y-2 pb-2">
                           <li>

                              <Link to={""} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Dashboard'}</span>
                              </Link>

                           </li>

                           <li>

                              <span class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group relative">

                                 <span class="ml-3 flex justify-between items-center w-full" onClick={() => setstuentsubmenu(!stuentsubmenu)}>Students
                                    <span className={` ${stuentsubmenu ? "rotate-90  " : " "} `}>
                                       <FaArrowRight></FaArrowRight>
                                    </span>
                                 </span>


                              </span>
                              <ul className={`  shadow-lg  bg-gray-100  top-10 flex flex-col left-0 p-4 gap-3 ${stuentsubmenu ? " " : "hidden"} `}  >



                                 <li>

                                    <Link to={"newstudent"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                       <span class="ml-3">{'Admission'}</span>
                                    </Link>
                                 </li>
                                 <li>

                                    <Link to={"feereceipt"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                       <span class="ml-3">{'Fee Receipt'}</span>
                                    </Link>

                                 </li>
                                 <li>

                                    <Link to={"payment"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                       <span class="ml-3">{'Payment'}</span>
                                    </Link>

                                 </li>


                                 <li>

                                    <Link to={"student"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                       <span class="ml-3">{'Student Details'}</span>
                                    </Link>
                                 </li>









                                 <li>


                                    <Link to={"Loginstudent"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                       <span class="ml-3">{'Login Status'}</span>
                                    </Link>


                                 </li>



                              </ul>

                           </li>


                           <li>

                              <Link to={"staff"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Staff'}</span>
                              </Link>

                           </li>
                           <li>

                              <Link to={"course"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Courses'}</span>
                              </Link>

                           </li>




                           <li>

                              <span class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group relative">

                                 <span class="ml-3 w-full flex items-center justify-between" onClick={() => setexamsubmenu(!examsubmenu)} >{'Exams'}

                                    <span className={` ${examsubmenu ? "rotate-90  " : " "} `}>
                                       <FaArrowRight></FaArrowRight>
                                    </span>
                                 </span>


                              </span>
                              <ul className={`  shadow-lg  bg-gray-100  top-10 flex flex-col left-0 p-4 gap-3 ${examsubmenu ? " " : "hidden"} `}  >

                                 {
                                    [
                                       {
                                          id: 1,
                                          name: "Apply for exam",
                                          path: "",

                                       },
                                       {
                                          id: 1,
                                          name: "Exam Secrete Code",
                                          path: "",

                                       },
                                       {
                                          id: 1,
                                          name: "Paper Based Exams Update",
                                          path: "",

                                       },
                                       {
                                          id: 1,
                                          name: "Offline Exam Update",
                                          path: "",

                                       },
                                       {
                                          id: 1,
                                          name: "All Exam  Result",
                                          path: "",

                                       },

                                    ].map((i) =>

                                       <li>

                                          <Link to={i.path} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                             <span class="">{i.name}</span>
                                          </Link>
                                       </li>

                                    )
                                 }




                              </ul>

                           </li>

                           <li>

                              <Link to={"career"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Career '}</span>
                              </Link>

                           </li>
                           <li>
                         

                              <Link to={"certificates"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Certificates'}</span>
                              </Link>

                           </li>
                           <li>

                              <Link to={"logout"} class="text-base text-gray-900 font-semibold cursor-pointer  rounded-lg flex items-center p-2 hover:bg-gray-100 group">

                                 <span class="ml-3">{'Logout'}</span>
                              </Link>

                           </li>


                        </ul>

                     </div>
                  </div>
               </div>
            </aside>



         </div>

      </div>


   )
}

export default DashbordHeader