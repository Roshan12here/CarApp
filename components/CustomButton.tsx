"use client"
import { CustomButtonProps } from '@/Types'
import React from 'react'
import Image from 'next/image'

const CustomButton = ({containerStyles,handleClick,title,btntype,textStyles,rightIcon} : CustomButtonProps ) => {
  return (
    <div className=''>
      <button 
      className={`custom-btn backhero w-full ${containerStyles} `}
      disabled={false}
      type={"button"|| btntype}
      onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles} `}>
          {title}
        </span>
        {
          rightIcon && (
            <div className='relative w-6 h-6'>
              <Image
              src={rightIcon}
              alt='Icon'
              fill
              className='object-contain'
              />
            </div>
          )
        }
      </button>
    </div>
  )
}

export default CustomButton
