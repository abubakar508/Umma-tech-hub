"use client";
import React from 'react'

//import components
import CustomButton from './CustomButton'

//import icons
import { AiOutlineArrowRight} from 'react-icons/ai'


//import next/image
import Image from 'next/image'


//import countup
import  Countup  from 'react-countup'

const Hero2 = () => {
  return (
    <div className=' h-screen flex flex-col md:pt-0 md:flex-row justify-evenly items-center' id='events'>
        <div className=' md:w-[500px] flex flex-col items-center text-center md:text-start md:items-start gap-2 p-3'>
            <h1 className=' md:text-3xl text-2xl font-bold uppercase'>Umma tech hub Events are sponsored by the vice chancellor and a team of proffessionals</h1>
            <small className=' text-base font-normal'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi fugit atque sapiente ad non eos ipsam accusamus qui, similique, dicta ut. Magni quod ipsa esse. Hic provident natus quisquam sint?
            </small>
            <CustomButton
             title='Explore Events'
             containerStyles=' rounded-full bg-blue-600'
             icon={<AiOutlineArrowRight />}
             />
             <div className=' flex items-center gap-2 font-medium mt-4 uppercase'>
              <span>Up to</span>
              <span className=' bg-[#003654] text-white p-2 rounded-md font-extrabold'>
              <Countup start={20} end={260} />
              </span>
              <span>events attended</span>
             </div>
        </div>
        <div className=' flex items-center justify-center gap-3 w-screen md:w-max'>
          <Image 
          src={require("../../public/assets/ViceChancellor.png")}
          width={40}
          height={120}
          draggable={false}
          alt='Vice Chancellor'
          className=' w-[120px] h-[350px] rounded-full mt-24' />
          <Image 
          src={require("../../public/assets/ViceChancellor.png")}
          width={40}
          height={120}
          draggable={false}
          alt='Vice Chancellor'
          className=' w-[120px] h-[350px] rounded-full ' />
          <Image 
          src={require("../../public/assets/ViceChancellor.png")}
          width={40}
          height={120}
          draggable={false}
          alt='Vice Chancellor'
          className=' w-[120px] h-[350px] rounded-full mt-24' />
          <Image 
          src={require("../../public/assets/ViceChancellor.png")}
          width={40}
          height={120}
          draggable={false}
          alt='Vice Chancellor'
          className=' w-[120px] h-[350px] rounded-full hidden md:flex ' />
        </div>
    </div>
  )
}

export default Hero2