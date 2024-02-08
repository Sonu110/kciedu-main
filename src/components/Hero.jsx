import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  IoMdSearch} from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import Heroslider from './Heroslider';

export default function Hero() {


    const herodata = [
        {
            id: 1,
            name: "Best for devlopment",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis eos numquam explicabo, incidunt aliquam fugit. Fugiat, omnis accusamus. Omnis sed quia a, esse veritatis vitae rem quis. Nihil, impedit?",
            num1: 4,
            other: "insitudets",
            num2: 4,
            other2: "insitudets",
            src: "https://admin.ducatindia.com/uploads/default/file_1704950684792.webp"

        },

        {
            id: 2,
            name: "Best for eduction and carres",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis eos numquam explicabo, incidunt aliquam fugit. Fugiat, omnis accusamus. Omnis sed quia a, esse veritatis vitae rem quis. Nihil, impedit?",
            num1: 4,
            other: "insitudets",
            num2: 4,
            other2: "insitudets",
            src: "https://admin.ducatindia.com/uploads/default/file_1704960045639.webp"

        },


    ]




    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}

                modules={[Autoplay]}
                className="mySwiper"
            >

                {
                    herodata.map(({ name, desciption, num1, num2, other, other2, src }) =>

                        <SwiperSlide>


                            <Heroslider name={name} describe={desciption} src={src} num1={num1} other={other} num2={num2} other2={other2}></Heroslider>



                        </SwiperSlide>


                    )
                }




            </Swiper>


      



        </>
    );
}
