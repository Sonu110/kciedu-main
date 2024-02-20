import React, { useContext, useState } from 'react'
import { userconetxt } from '../context/Context'

function Conatctmenu() {
    const [opennav, setnav]=useState(false)
    const {islogin} = useContext(userconetxt)
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Fetch WhatsApp API or use a third-party service to send the form data
      const formData = new FormData(event.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const course = formData.get('course');
      const center = formData.get('center');
  
      const message = `
        New Scholarship Application:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Center: ${center}
      `;
  
      // Replace the following URL with the actual WhatsApp API endpoint
      const whatsappApiUrl = 'https://api.whatsapp.com/send?phone=7217605495&text=' + encodeURIComponent(message);
  
      // Open WhatsApp link
      window.open(whatsappApiUrl, '_blank');
    };
  
  return (
    <>
        <div id="login-popup" tabindex="-1"
    class={ ` bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex ${opennav || islogin ? "hidden" :""} ` }
    style={{zIndex:"999"}}

    >
    <div class="relative p-4 w-full max-h-[500px]  md:max-w-[80%]  sm:max-w-[90%] h-full md:h-auto  grid grid-cols-1 lg:grid-cols-2  bg-gray-50 rounded-lg shadow-inner">
            <button type="button"
        onClick={()=> setnav(true)}  
              class="absolute z-50 top-3 right-4 bg-red-600  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" class="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"></path>
                </svg>
                <span class="sr-only">Close popup</span>
            </button>
        <div className=' bg-red-300 w-full  object-cover  hidden
             lg:block'>
            <img src="https://www.cssscript.com/wp-content/uploads/2023/08/Build-Beautiful-AI-Apps-With-the-LangUI-Tailwind-Library.webp" alt="" className=' w-full 
            h-[450px]
             object-cover
            
            ' />            
        </div>

        <div class="relative bg-white rounded-lg shadow">

            <div class="p-5">
                <h3 class="text-2xl mb-0.5 font-medium"></h3>
                <p class="mb-4 text-sm font-normal text-gray-800"></p>

                <div class="text-center">
                    <p class="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                       Apply to get scholaship upto 80%
                    </p>
               
                </div>

               


                <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className=' grid grid-cols-2'>

            
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            </div>

            <div className=' grid grid-cols-2'>

            <div>
              <label htmlFor="course" className="block text-gray-800 font-bold mb-2">
                Select Course
              </label>
              <select
                id="course"
                name="course"
                className="w-full border border-gray-300 p-2 rounded-lg"
              >
                <option value="">Select a course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="center" className="block text-gray-800 font-bold mb-2">
                Select Center
              </label>
              <select
                id="center"
                name="center"
                className="w-full border border-gray-300 p-2 rounded-lg"
              >
                <option value="">Select a center</option>
                <option value="center1">Center 1</option>
                <option value="center2">Center 2</option>
                <option value="center3">Center 3</option>
              </select>
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
              >
                Submit
              </button>
            </div>
          </form>

              
            </div>
        </div>
    </div>
</div>
</>

  )
}

export default Conatctmenu