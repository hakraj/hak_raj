'use client'

import IntroContact from "./Intro";
import ContactInfo from "./Info";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='z-10 contact w-full max-w-6xl py-28'>
      <div className="min-h-[40vh] m-auto">
        <IntroContact />
        <ContactInfo />
      </div>
    </section>
  )
}

export default Contact;