'use client';

import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { opacity} from './anim' 
import { useState } from 'react';

function Header() {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='header absolute w-full sm:px-[2.5vw] sm:pt-[2vw] cursor-pointer'>
        <div className='w-full flex items-center justify-between'>
            <div>
                <Link href="/"> 
                    <h2 className='sm:text-[1.3vw] font-semibold tracking-wider leading-[2vw]'>makepill</h2>
                </Link>
            </div>
            <motion.div variants={opacity} animate={isActive ? 'closed' : 'open'} className='uppercase text-[.8vw] text-left'>
                / Index
            </motion.div>
            <div className='w-[5vw] flex items-center justify-center'>
                <div className='w-[2.2vw] h-[2vw] border-b-[1px] border-t-[1px] border-l-[1px] 
                    border-r-[1px] rounded-l-full flex items-center justify-center px-[1.1vw] '
                >
                    <span className='text-[.8vw]'>M</span>
                </div>
                <div className='w-[2.2vw] h-[2vw] border-b-[1px] border-t-[1px] 
                    border-r-[1px] rounded-r-full flex items-center justify-center 
                    px-[1.1vw] hover:bg-white hover:text-black'
                >
                    <motion.span variants={opacity}
                        animate={isActive ? 'closed' : 'open'}
                    >
                        <HiOutlineMenuAlt4 className='text-[1.2vw]' />
                    </motion.span>
                    <motion.span  variants={opacity} animate={!isActive ? 'closed' : 'open'}>
                        <IoCloseOutline className='text-[1.2vw]' />
                    </motion.span>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Header
