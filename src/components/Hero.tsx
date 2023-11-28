"use client";
import React, { useRef } from 'react'

//import image
import Image from 'next/image'

//import swiper 
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


const Hero = () => {
    const paginationRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className=' relative h-screen' id='home'>
    <div className='h-[350px] bg-gradient-to-b from-blue-500 to-[#2db21e] flex justify-center'>
        <div className=' flex flex-col md:flex-row items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-b from-black drop-shadow-3xl to-[#003654]'>
        <h1 className=' text-8xl  md:text-8xl xl:text-9xl font-extrabold uppercase'>UMMA</h1>
        <div className=' flex items-center justify-center gap-4'>
        <h1 className=' text-6xl  md:text-8xl xl:text-9xl font-extrabold uppercase'>Tech</h1>
        <h1 className=' text-6xl  md:text-8xl xl:text-9xl font-extrabold uppercase'>Hub</h1>
        </div>
        </div>
       
    </div>
    <div className=' relative h-[400px] w-full bg-gradient-to-b from-[#2db21e] flex flex-col items-center justify-center'>
    <div className=' w-full py-5 mt-10 z-10 text-center justify-center items-center'>
            <span className=' bg-cyan-800 text-neutral-200 py-2 px-2 shadow-md rounded-full'>Drag images to Slide</span>
        </div>
        <div className=' absolute w-full flex justify-between px-5 -top-24'>
       
            <Swiper
            breakpoints={{
                340: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            loop={true}
            pagination={{
                el: paginationRef.current,  
                type: "bullets",
                clickable: true,
                bulletClass: "bg-amber-400",
                bulletActiveClass: "bg-green-400",
              }}
            navigation={true}
            >
            <SwiperSlide>
            <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech1.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech2.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
            </SwiperSlide>
       <SwiperSlide>
       <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech3.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech3.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech3.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className=' -top-24 w-full h-full m-2 bg-black md:h-[250px] shadow-2xl rounded-md'>
            <Image src={require('../../public/assets/Tech3.png')} width={500} height={500} priority quality={100} alt='Umma Hero Image' className=' w-full h-full md:object-fill object-scale-up rounded-md' />
        </div>
       </SwiperSlide>
       </Swiper>
       
        </div>
        
        <div className=' flex flex-col gap-2 mt-10 pt-32 md:pt-0 items-center justify-center text-center'>
            <h1 className=' md:text-4xl text-2xl uppercase font-bold'>Fostering Innovation & Technopreneurship</h1>
            <small className=' w-full md:w-[600px] font-normal text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero labore nobis, rem quisquam dolore enim. Deserunt sapiente quibusdam, dignissimos sit officiis error consequatur quas consequuntur quasi illum, in atque iusto!</small>
        </div>
    </div>
    </div>
  )
}

export default Hero