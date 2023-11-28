"use client";
import React, { useEffect, useState } from 'react'

//import navdata
import { NavData } from '@/constants';


//import link from react-scroll
import { Link } from 'react-scroll'


//import components
import CustomButton from './CustomButton';
import Image from 'next/image';



const Navbar = () => {

  const [header, setHeader] = useState(false);

  const [auth, setAuth] = useState(false)

  useEffect(() => {
   const handleScroll = () => {
    //header
    if (window.scrollY > 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
   };

   //Add event listener
   window.addEventListener('scroll', handleScroll);

   //remove event listener
return () => {
  window.removeEventListener('scroll', handleScroll);
}
  },);
  
  return (
    <nav className={` ${header ? " transition-all ease-in-out duration-300 shadow-md text-white backdrop-blur-md bg-black/50 py-5" : ' bg-transparent transition-all ease-in duration-300' } z-50 fixed w-full top-0 flex items-center justify-between py-4  px-3 md:px-44`}  >
      <div className=' text-white font-extrabold flex items-center gap-1 justify-start  text-xl'>
        <h1 className=' text-[#2db21e] uppercase'>
          Umma
        </h1>
        <h1 className=' capitalize text-[#003654]'>Tech</h1>
        <h1 className=' capitalize'>Hub</h1>
        <div className=' w-2 h-2 bg-blue-600 rounded-full  ' />
     
      </div>
      <div className=' text-white hidden lg:flex items-center justify-center'>
      {NavData.map((link, index : number) => {
          return (
            <Link 
            to={link.Path}
            key={index}
            smooth
            spy
            offset={50}
            activeClass='active'
            className=' items-center justify-center cursor-pointer px-3 hover:text-green-300'
            >
              {link.title}
            </Link>
          )
        })}
      </div>
      <div onClick={() => setAuth(!auth)}>
        { auth ? (
          <CustomButton title='Sign in' containerStyles=' bg-[#003654] rounded-md' />
        ) : (
          <div className=' flex items-center gap-3'>
            <Image src={require('../../public/assets/UmmaTowers.png')} 
            className=' w-[50px] h-[50px] rounded-full bg-[#003654]'
            alt='Umma User'
            width={50}
            height={50}
            />
            <span className=' font-extrabold text-[#003654]'>Hello Umma</span>
          </div>
        )}
      </div>
      </nav>
  )
}

export default Navbar