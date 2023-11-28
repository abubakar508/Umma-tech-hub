import React from 'react'
import { CustomButtonProps } from '@/types'
import Link from 'next/link'

const CustomButton = ({title, icon, containerStyles,} : CustomButtonProps) => {
  return (
    <button className={` ${containerStyles} group flex items-center gap-2 px-4 py-2 text-neutral-50`}>
        {title}
        <span className=' group-hover:rotate-180'>
        {icon}
      </span>
    </button>
  )
}

export default CustomButton