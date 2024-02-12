import React from 'react'

function Heroslider({name,describe,src,num1,num2,other,other2}) {
  return (
    <section class="pt-12 pb-12 sm:pb-16 lg:pt-8 flex items-center justify-center  h-screen  mt-10 box-border">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div className=''>
                    <div class="text-center lg:text-left mt-5 ">
                        <h1 class="text-xl font-bold leading-tight text-gray-900 sm:text-2xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj  ">{name}</h1>
                        <p class="mt-2 text-sm md:tex-lg text-gray-600 sm:mt-8 font-inter">{describe}</p>

                    </div>

                    <div class="flex items-center justify-center   mt-10 max-w-[900px]:mt-0 space-x-6 lg:justify-start sm:space-x-8">
                        <div class="flex items-center hidden sm:block">
                            <p class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">{num1}</p>
                            <p class="ml-3 text-sm text-gray-900 font-pj">{other}</p>
                        </div>

                        <div class="hidden sm:block">
                            <svg class="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>

                        <div class="flex items-center hidden sm:block">
                            <p class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">{num2}</p>
                            <p class="ml-3 text-sm text-gray-900 font-pj">{other2}</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                   <img src={src} alt="" srcset="" className=' w-full object-cover'   />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Heroslider