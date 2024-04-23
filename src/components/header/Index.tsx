import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'


function Header() {
    
  return (
    <div data-scroll-section className='w-full '>
        <div>
            <div>
                <Link href="/"> 
                    <h2 className='sm:text-[1.5vw] font-semibold leading-[2vw]'>makepill</h2>
                </Link>
            </div>

            <div>
                <h5>/Index</h5>
            </div>

            <div>

            </div>
        </div> 
    </div>
  )
}

export default Header
