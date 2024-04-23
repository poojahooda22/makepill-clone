import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'


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
            <div className='flex'>
                <div><span>M</span></div>
                <div><span>icon</span></div>
            </div>
        </div> 
    </div>
  )
}

export default Header
