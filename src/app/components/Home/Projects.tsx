/* eslint-disable @next/next/no-img-element */
'use client'

import styles from "../../styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { monofett } from "../../fonts";
import { useEffect } from 'react';


const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='z-10 projects w-full max-w-6xl pt-28 pb-20'>

      <div className='degreed flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
        <div className={`md:w-2/3  ${styles.project} max-sm:p-2 max-sm:rounded-[1.25rem]`} data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-degreed.png" alt="Screenshot of the Degreed product" className="block max-w-full rounded-xl sm:rounded-2xl" />
        </div>
        <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/logo-degreed.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
          <h2 className='text-2xl font-medium my-8 '>Simplifying and redesigning a learner experience platform.</h2>
        </div>
      </div>

      <div className='notify  flex flex-wrap items-center justify-between mb-[15vh] min-h-[40vh] m-auto' >
        <div className='md:w-1/5 min-w-[6rem]  m-8' data-aos="fade-right" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <h1 className={`text-[#f5ba13] text-4xl max-sm:text-3xl ${monofett.className} dark:invert max-w-[7rem] mb-8 cursor-pointer`} > notify </h1>
          <a href="https://notify-hakraj.vercel.app" target="_blank" rel="noopener noreferrer">
            <h2 className='text-2xl font-medium my-8 hover:tet-underline '>Stay Informed, Share ideas. Elevate your experience with notify.</h2>
          </a>
        </div>

        <div className={`w-[30%] md:w-1/5 sm:rounded-[3rem] max-sm:p-[1px] max-sm:rounded-[1.5rem] ${styles.project} mb-[6vw]`} data-aos="zoom-out-up" data-aos-delay="200" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <a href="https://notify-hakraj.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src="/eg-img/notify/mobile.png" alt="Screenshot of the notify product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
          </a>
        </div>
        <div className={`w-[30%] md:w-1/5 ${styles.project} sm:rounded-[3rem] max-sm:p-[1px] max-sm:rounded-[1.5rem]`} data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <a href="https://notify-hakraj.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src="/eg-img/notify/mobile-eplore.png" alt="Screenshot of the notify product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
          </a>
        </div>
        <div className={`w-[30%] md:w-1/5 ${styles.project} mt-[6vw] sm:rounded-[3rem] max-sm:p-[1px] max-sm:rounded-[1.5rem]`} data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <a href="https://notify-hakraj.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src="/eg-img/notify/mobile-id.png" alt="Screenshot of the notify product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
          </a>
        </div>
      </div>

      <div className='pennywise flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
        <div className={`md:w-2/3  ${styles.project} max-sm:p-2 max-sm:rounded-[1.25rem]`} data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/Pennywise/pennywise-mac.png" alt="Screenshot of the Pennywise product" className="block max-w-full rounded-xl sm:rounded-2xl" />
        </div>
        <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <h1 className={`text-[#0d6efd] font-bold text-3xl max-sm:text-2xl  ${styles.fontsans} dark:invert max-w-[7rem] mb-8 cursor-pointer`} > Pennywise </h1>
          <a href="https://pennywise-hakraj.vercel.app" target="_blank" rel="noopener noreferrer">
            <h2 className='text-2xl font-medium my-8 hover:tet-underline '>Transform Your Banking Experience with Pennywise.</h2>
          </a>

        </div>
      </div>

      <div className='gibbon flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
        <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/logo-gibbon.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
          <h2 className='text-2xl font-medium my-8 '>Co-founding and designing a simple social learning platform.</h2>
        </div>
        <div className={`md:w-2/3  ${styles.project} max-sm:p-2 max-sm:rounded-[1.25rem]`} data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-gibbon.png" alt="Screenshot of the Degreed product" className=" block max-w-full rounded-xl sm:rounded-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Projects;