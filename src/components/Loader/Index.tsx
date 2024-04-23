'use client';


import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { gsap, Power4 } from "gsap";


gsap.registerPlugin(ScrollTrigger);

function Loader() {

//    useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.from('.head4 h4', {
//         y: 150,
//         stagger: 0.5,
//         duration: .9,
//     })
//     tl.to('.head4 h4', {
//         y: -100,
//         stagger: 0.2,
//         duration: .9,
//         delay: 6.1,
//     }, '-=1')
//     tl.to('.part1 h4, h5', {
//         y: -100,
//         duration: 1,
//     }, '-=1')
//     tl.to('.videoContainer', {
//         opacity: 0,
//         delay: .1,
//     }, '-=1')
//     tl.from('.page1', {
//         y: 1200,
//         opacity: 0,
//         ease: Power4.easeOut,
//     })
//     tl.to('.loader', {
//         display: 'none'
//     })

//    })

    useEffect(() => {
        const h5timer = document.querySelector('.part1 h5');
        
        if (h5timer instanceof HTMLElement) {
            let grow: number = 0;
            const intervalId = setInterval(() => {
                if (grow < 100) {
                    h5timer.innerHTML = `${grow++}`;
                } else {
                    clearInterval(intervalId); // Stop the interval once it reaches 100
                    h5timer.innerHTML = `${grow}`;
                }
            }, 50);
        }
    }, []);

  return (
    <div>
        <div className='loader w-full   bg-[#0f0f0f] relative'>
            {/* video on the loader screen */}
            <div className='video-wrapper flex items-center justify-center '>
                <div className='videoContainer w-full h-[100vh] sm:h-[50vw] '>
                    <video 
                        className='w-full h-full object-cover'
                        src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_pill_v2_3f977a1a22.mp4"
                        autoPlay
                        loop
                        muted
                    >
                    </video>   
                </div> 
            </div>
            {/* loader text */}
            <div className='w-full absolute sm:bottom-[5vw] flex items-center 
            justify-between px-[2.5vw]'>
                <div className='head4 sm:text-[1vw] overflow-hidden'>
                    <h4>Please wait, we are crafting some pills...</h4>
                </div>
                <div className='part1 flex sm:text-[1vw] overflow-hidden'>
                   <h5>00</h5>
                    <h4>%</h4>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Loader;
