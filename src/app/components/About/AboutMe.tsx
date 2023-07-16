'use client'

import AboutInfo from './AboutInfo';
import AboutTitle from './AboutTitle';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AboutMe = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='z-10 about-me w-full max-w-6xl py-28'>
      <div className="flex flex-wrap items-start justify-around min-h-[40vh] m-auto">
        <AboutTitle />
        <AboutInfo />
      </div>
    </section>
  )
}

export default AboutMe