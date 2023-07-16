'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const IntroHome = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='z-10 intro w-full max-w-6xl py-28'>
      <div className='pt-[10vh] min-h-[30vh] '>
        <p className='mb-4 font-light font-mono text-slate-500 ' data-aos="fade-right" data-aos-delay="150" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">Hakeem Raji | Web developer</p>
        <h1 className='text-4xl leading-normal mb-4 font-medium' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">I craft dynamic web app with seamless user experiences.</h1>
      </div>
    </section>
  )
}

export default IntroHome