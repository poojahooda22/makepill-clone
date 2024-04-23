import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import { HiOutlineMenuAlt4 } from "react-icons/hi";


function Header() {
    
  return (
    <div className='w-full sm:px-[2.5vw] sm:py-[2vw]'>
        <div className='w-full flex items-center justify-between'>
            <div>
                <Link href="/"> 
                    <h2 className='sm:text-[1.3vw] font-semibold tracking-wider leading-[2vw]'>makepill</h2>
                </Link>
            </div>
            <div className=' w-[4.5%] text-[.9vw] text-left'>
                /Index
            </div>
            <div className='w-[5vw] bg-red-400 flex items-center justify-center'>
                <div className='w-[2vw] h-[2vw] border-b-[1px] border-t-[1px] border-l-[1px] border-r-[1px] rounded-l-full'><span className='text-[.9vw]'>M</span></div>
                <div className='w-[2vw] h-[2vw] border-b-[1px] border-t-[1px] border-r-[1px] rounded-r-full'><span><HiOutlineMenuAlt4 /></span></div>
            </div>
        </div> 
    </div>
  )
}

export default Header
