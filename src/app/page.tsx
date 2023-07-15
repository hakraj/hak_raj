/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const stackNames01 = ["React", "Node.js", "Typescript", "Express", "HTML", "Javascript", "CSS", "Next.js", "Tailwindcss", "mongodb", "Bootstrap", "mySQL", "Git", "Api",]
const stackNames02 = ["OAuth", "JSON", "material-ui", "JQuery", "Vercel", "Heroku", "Netlify", "Passport", "Github", "VS Code", "npm", "Postman"]
const year = new Date().getFullYear();

export default function Home() {

  const [stack, setStack] = useState(false);
  const stackNames = !stack ? stackNames01 : stackNames02;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 md:px-16 lg:px-24 ">

        <div className='nav z-10 w-full max-w-6xl flex items-center justify-between font-mono  text-sm'>
          <Link href={"/"}>
            <Image
              src="/hak_raj.svg"
              alt="hak_raj Logo"
              className="dark:invert"
              width={100}
              height={30}
              priority
            />
          </Link>


          <div className='space-x-8 sm:space-x-12 text-slate-500 '>
            <Link className=' max-sm:hidden' href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>

        <section className='z-10 intro w-full max-w-6xl py-28'>
          <div className='pt-[10vh] min-h-[30vh] '>
            <p className='mb-4 font-light font-mono text-slate-500 ' data-aos="fade-right" data-aos-delay="150" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">Hakeem Raji | Web developer</p>
            <h1 className='text-4xl leading-normal mb-4 font-medium' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">I craft dynamic web app with seamless user experiences.</h1>
            {/* <button className='border border-black bg-inherit px-2 py-1 text-sm hover:bg-black hover:text-white'>Contact me</button> */}
          </div>
        </section>

        <section className='z-10 pitch&stack w-full max-w-6xl pt-28 pb-20 '>
          <div className='flex flex-wrap items-stretch justify-between min-h-[40vh] m-auto'>
            <div className='pitch lg:w-1/2 mb-8 mr-4'>
              <div className='bg-black text-white w-fit p-1 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>

              </div>
              <h2 className='text-2xl font-medium my-8 '>Build for the web</h2>
              {/* <p className='md:w-1/2 my-8'>Are you looking to bring your web development project to life? Look no further! Our experienced full-stack web developer can handle both the front-end and back-end development, ensuring a seamless and efficient website or application. With expertise in the latest technologies and frameworks, we can create robust and scalable solutions tailored to your specific needs. From stunning user interfaces to secure database management, we&apos;ve got you covered. Let&apos;s collaborate and build something amazing together!</p> */}
              <p className='leading-relaxed text-slate-600 dark:text-slate-400'>Passionate about crafting exceptional web experiences, I bring a unique blend of creativity and technical expertise to every project. With a keen eye for design and a deep understanding of front-end and back-end technologies, I can turn your ideas into reality. From building intuitive user interfaces to developing robust server-side logic, I strive to create seamless and performant web applications. Let&apos;s collaborate and create something remarkable together! 🚀🌏</p>
            </div>
            <div className='stack incomplete-border p-10 w-fit m-auto' data-aos="flip-right" data-aos-delay="300" data-aos-offset="180" data-aos-duration="1500" data-aos-easing="ease-out-quad" data-aos-anchor-placement="right-left" data-aos-once="true">
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 z-10' >
                {stackNames.map((stackName, index) => {
                  return (
                    <div key={index} className='m-1 p-1'>
                      <Image
                        src={`/stack/${stackName}.svg`}
                        alt={`${stackName} Logo`}
                        className='inline mr-1 sm:w-6 sm:h-6'
                        width={20}
                        height={20}
                        priority
                      />
                      <span className='text-xs sm:text-sm' >{stackName}</span>
                      <div className='w-full mt-1 h-[2px] animate-gradient'></div>
                    </div>
                  )
                })}
              </div>
              <div onClick={() => { setStack(!stack) }} className='absolute z-10 bottom-4 right-6 text-xs text-violet-900 font-mono cursor-pointer'>{!stack ? "see more" : "go back"}</div>
            </div>
          </div>

        </section>

        <section className='z-10 projects w-full max-w-6xl pt-28 pb-20'>

          <div className='degreed flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
            <div className='md:w-2/3  project-image max-sm:p-2 max-sm:rounded-[1.25rem]' data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-degreed.png" alt="Screenshot of the Degreed product" className="block max-w-full rounded-xl sm:rounded-2xl" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>
            <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/logo-degreed.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
              {/* <Image
              src="/eg-img/logo-degreed.svg"
              alt="Degreed logo"
              className=""
              width={186}
              height={36}
              priority
            /> */}
              <h2 className='text-2xl font-medium my-8 '>Simplifying and redesigning a learner experience platform.</h2>
            </div>
          </div>

          <div className='bookclub  flex flex-wrap items-center justify-between mb-[15vh] min-h-[40vh] m-auto' >
            <div className='md:w-1/5 min-w-[6rem]  m-8' data-aos="fade-right" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/logo-bookclub.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
              {/* <Image
              src="/eg-img/logo-degreed.svg"
              alt="Degreed logo"
              className=""
              width={186}
              height={36}
              priority
            /> */}
              <h2 className='text-2xl font-medium my-8 '>Pivoting to an enterprise book learning platform.</h2>
            </div>

            <div className='w-[30%] md:w-1/5 sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem] project-image mb-[6vw]' data-aos="zoom-out-up" data-aos-delay="200" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-bookclub.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>
            <div className='w-[30%] md:w-1/5 project-image sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem]' data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-bookclub-2.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>
            <div className='w-[30%] md:w-1/5 project-image mt-[6vw] sm:rounded-[3rem] max-sm:p-1 max-sm:rounded-[1.5rem]' data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-bookclub-3.png" alt="Screenshot of the Degreed product" className="block max-w-full sm:rounded-[2.25rem] rounded-[1.5rem]" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>


          </div>

          <div className='codespace flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
            <div className='md:w-2/3  project-image max-sm:p-2 max-sm:rounded-[1.25rem]' data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-codespace.png" alt="Screenshot of the Degreed product" className="block max-w-full rounded-xl sm:rounded-2xl" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>
            <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/logo-codespace.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
              {/* <Image
              src="/eg-img/logo-degreed.svg"
              alt="Degreed logo"
              className=""
              width={186}
              height={36}
              priority
            /> */}
              <h2 className='text-2xl font-medium my-8 '>Designing a MacOS app to deploy static websites.</h2>
            </div>
          </div>

          <div className='gibbon flex flex-wrap items-center mb-[15vh] min-h-[40vh] m-auto' >
            <div className='md:w-1/5 m-8' data-aos="fade-left" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/logo-gibbon.svg" alt="Degreed logo" className='dark:invert max-w-[7rem] mb-8' />
              {/* <Image
              src="/eg-img/logo-degreed.svg"
              alt="Degreed logo"
              className=""
              width={186}
              height={36}
              priority
            /> */}
              <h2 className='text-2xl font-medium my-8 '>Co-founding and designing a simple social learning platform.</h2>
            </div>
            <div className='md:w-2/3  project-image max-sm:p-2 max-sm:rounded-[1.25rem]' data-aos="zoom-out-up" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/project-gibbon.png" alt="Screenshot of the Degreed product" className=" block max-w-full rounded-xl sm:rounded-2xl" />
              {/* <Image
              src="/eg-img/project-degreed.png"
              alt="Screenshot of the Degreed product"
              className="block max-w-full rounded-xl sm:rounded-2xl"
              width={1000}
              height={700}
              priority
            /> */}
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col items-center justify-between pt-20 pb-16 px-8 md:px-16 lg:px-24 min-h-[15vh] sm:mt-[10vh] bg-[rgba(255,255,255,.25)] border-t border-t-[rgba(0,16,36,9%)]'>
        <div className='z-10 footer w-full max-w-6xl flex flex-wrap m-auto my-8 md:my-16 relative'>
          <div>
            <Image
              src="/hak_raj.svg"
              alt="hak_raj Logo"
              className="dark:invert mr-24 mb-8"
              width={100}
              height={30}
              priority
            />
          </div>
          <div className='md:w-2/5'>
            <p className='text-sm font-light'>
              Simplicity and efficiency is the key to great user experiences. Let me help your company develop a simpler user experience to achieve better outcomes.
            </p>
            <button className=" font-mono my-8 max-sm:mb-24 px-4 py-2 rounded-xl shadow-xl bg-[rgba(0,16,36)] text-white hover:text-[rgba(0,16,36)] hover:bg-white ">Get in touch</button>
          </div>
          <div className='absolute right-4 bottom-4 '>
            <div className='flex space-x-2 justify-end mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </div>
            <p className='text-xs font-mono text-slate-400 dark:text-slate-600'>&copy; hak_raj {year}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
