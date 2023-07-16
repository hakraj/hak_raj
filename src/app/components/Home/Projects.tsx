/* eslint-disable @next/next/no-img-element */
'use client'

import styles from "../../styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
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

      <div className='bookclub  flex flex-wrap items-center justify-between mb-[15vh] min-h-[40vh] m-auto' >
        <div className='md:w-1/5 min-w-[6rem]  m-8' data-aos="fade-right" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/logo-bookclub.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
          <h2 className='text-2xl font-medium my-8 '>Pivoting to an enterprise book learning platform.</h2>
        </div>

        <div className={`w-[30%] md:w-1/5 sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem] ${styles.project} mb-[6vw]`} data-aos="zoom-out-up" data-aos-delay="200" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-bookclub.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
        </div>
        <div className={`w-[30%] md:w-1/5 ${styles.project} sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem]`} data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-bookclub-2.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
        </div>
        <div className={`w-[30%] md:w-1/5 ${styles.project} mt-[6vw] sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem]`} data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-bookclub-3.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
        </div>
      </div>

      <div className='codespace flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
        <div className={`md:w-2/3  ${styles.project} max-sm:p-2 max-sm:rounded-[1.25rem]`} data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/project-codespace.png" alt="Screenshot of the Degreed product" className="block max-w-full rounded-xl sm:rounded-2xl" />
        </div>
        <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <img src="/eg-img/logo-codespace.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
          <h2 className='text-2xl font-medium my-8 '>Designing a MacOS app to deploy static websites.</h2>
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