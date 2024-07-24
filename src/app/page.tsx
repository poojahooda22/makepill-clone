'use client'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef } from 'react';
import Loader from '@/components/Loader/Index';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import LandingPage from '@/components/hero/Index';


export default function Home() {
  const containerRef = useRef(null)

  return (

    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      
    }
  }
  watch={
    [
      //  For exemple, on Next.` want to add
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
    <div className=" text-white bg-primary-main ">
      {/* Your content here */}
       <Loader/>
       <LandingPage/>
    </div>
  </main>
</LocomotiveScrollProvider>
    
  );
}
