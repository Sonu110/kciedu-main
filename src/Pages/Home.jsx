import React, { useContext, useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import Hero from '../components/Hero';
import Cards from '../components/Card';
import course from '../Data/Course';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'; // Import all Swiper styles


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';
import { Autoplay, Navigation } from 'swiper/modules';
import Deatilsheader from '../components/Deatilsheader';
import { Link } from 'react-router-dom';
import Roadmap from '../components/Roadmap';
import Conatctmenu from '../components/Conatctmenu';
import { userconetxt } from '../context/Context';
import Detailslider from '../components/Detailslider';
import Kcigrowth from '../components/Kcigrowth';
import Reviews from '../components/Reviews';

function Home() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slidesreview, setslidesreview] = useState(1);
  
  const [address, setaddress] = useState('Roshan nager  Agwanpur faridabad');
  const [countdown, setCountdown] = useState(calculateCountdown());

  const {coursedata} = useContext(userconetxt)
  const data = course.concat(coursedata)
  
  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function calculateCountdown() {
    const now = new Date();
    const nextCountdownDate = new Date(now);
    nextCountdownDate.setHours(now.getHours() + 5);
    nextCountdownDate.setMinutes(0);
    nextCountdownDate.setSeconds(0);
    const timeDifference = nextCountdownDate - now;
  
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return { hours, minutes, seconds };
  }
  

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(4);
        setslidesreview(3)
      } 
      else if (window.innerWidth >= 800) {
      
        setSlidesPerView(3);
        setslidesreview(2)
      }
       else if (window.innerWidth >= 600) {
          setSlidesPerView(2);
          setslidesreview(2)
        }
      
      else {
        setSlidesPerView(1);
        setslidesreview(1)
      }
    };

    // Initial setup
    updateSlidesPerView();

    // Update slidesPerView on window resize
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <>
    <Conatctmenu></Conatctmenu>
      <Hero />
    <Deatilsheader></Deatilsheader>
    <Detailslider></Detailslider>
      <section className='top programs'>
        <h2 className="text-4xl p-10 font-bold ">Explore Top Programs</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 place-items-center 	'>
          {data.map((i) =>
          <Link to={`/details/${i?.name || i?.Name}`} className='flex items-center shadow-lg min-w-full bg-gray-50 rounded-lg max-h-12 '>
           

              <div className="max-w-16 ">
                <img src={i?.src || i?.Image}alt={i?.name || i?.Name} className='max-h-12 '  />
              </div>
              <p className="px-6" >{i?.name || i?.Name}</p>
           
          </Link>
          )}
        </div>
      </section>
      <section className='upcoming Batches p-10'>
        <h2 className="text-4xl font-bold">Upcoming Batches : <span className=' text-red-500'>{`${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</span></h2>
        <div className="branch flex items-center gap-3 flex-wrap mt-5" id='flexcols'>
          <span>Choose your Location:</span>
          <div className='w-12'>
            <Select variant="standard" label="Select place" onChange={(e) => setaddress(e)}>
              <Option value='Roshan nager  Agwanpur faridabad'>Roshan nager</Option>
              <Option value='Vinay nager'>Vinay nager</Option>
              <Option value='MICt Nager'>Mict nager</Option>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper sm:swiper-2 md:swiper-3 lg:swiper-4 xl:swiper-5"
          >
            {data.map((i) =>
              <SwiperSlide>
                <Cards key={i?.id || i?._id} name={i?.name || i?.Name} des={i?.des || i?.Fees} src={i?.src || i?.Image} flag={true}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>

<Roadmap></Roadmap>

<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold flex  flex-col   ">Reviews
    <div className=' flex text-yellow-600 justify-center'>
    {
        [1,2,3,4,5].map(()=>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
        <path fill="currentColor"
          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
        )
    }
    </div> 
    </h2>

    <div class="flex flex-wrap justify-evenly gap-4  flex-col    relative ">
    <div class="max-w-sm p-6 bg-white   rounded-lg  dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-blue-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Hundreds of Happy Students</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Several of them where asked how satisfied they are from our courses. Here are the statements:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        
    </a>

</div>



    <Swiper
      slidesPerView={slidesreview}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
       
      }}
      loop={true}
      modules={[Autoplay ,Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="mySwiper sm:swiper-2 md:swiper-3 lg:swiper-4 xl:swiper-5 relative"
    >
   
      {data.map((i) => (
        <SwiperSlide key={i?.id || i?._id}>
          <Reviews />
        </SwiperSlide>
      ))}
    </Swiper>



</div>
  </section>
</div>


<Kcigrowth></Kcigrowth>






      <section className='Find Best Course p-10'>
        <h2 className="text-4xl font-bold">Find Best course</h2>
        <div className="mt-4">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper sm:swiper-2 md:swiper-3 lg:swiper-4 xl:swiper-5"
          >
            {data.map((i) =>
              <SwiperSlide>
               <Cards key={i?.id || i?._id} name={i?.name || i?.Name} des={i?.des || i?.Fees} src={i?.src || i?.Image} flag={false} pdf={i?.data || i?.PDF}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
