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
              <p className='leading-relaxed text-slate-600'>Passionate about crafting exceptional web experiences, I bring a unique blend of creativity and technical expertise to every project. With a keen eye for design and a deep understanding of front-end and back-end technologies, I can turn your ideas into reality. From building intuitive user interfaces to developing robust server-side logic, I strive to create seamless and performant web applications. Let&apos;s collaborate and create something remarkable together! 🚀🌏</p>
            </div>
            <div className='stack incomplete-border p-10 w-fit m-auto' data-aos="flip-right" data-aos-delay="300" data-aos-offset="180" data-aos-duration="1500" data-aos-easing="ease-out-quad" data-aos-anchor-placement="right-left" data-aos-once="true">
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 z-10' >
                {stackNames.map((stackName, index) => {
                  return (
                    <div key={index} className='m-1 p-1'>
                      <Image
                        src={`/stack/${stackName}.svg`}
                        alt={`${stackName} Logo`}
                        className='inline mr-1'
                        width={24}
                        height={24}
                        priority
                      />
                      <span className='text-sm' >{stackName}</span>
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
              <img src="/eg-img/logo-degreed.svg" alt="Degreed logo" className=' max-w-[7rem] mb-8' />
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
            <div className='md:w-1/5 min-w-[6rem] mi m-8' data-aos="fade-right" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <img src="/eg-img/logo-bookclub.svg" alt="Degreed logo" className=' max-w-[7rem] mb-8' />
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

            <div className='w-[30%] md:w-1/5 project-image mb-[6vw] rounded-[3rem] max-sm:p-2 max-sm:rounded-[1.5rem]' data-aos="zoom-out-up" data-aos-delay="200" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
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
            <div className='w-[30%] md:w-1/5 project-image rounded-[3rem] max-sm:p-2 max-sm:rounded-[1.5rem]' data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
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
            <div className='w-[30%] md:w-1/5 project-image mt-[6vw] rounded-[3rem] max-sm:p-2 max-sm:rounded-[1.5rem]' data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
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
              <img src="/eg-img/logo-codespace.svg" alt="Degreed logo" className=' max-w-[7rem] mb-8' />
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
              <img src="/eg-img/logo-gibbon.svg" alt="Degreed logo" className=' max-w-[7rem] mb-8' />
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
              <img src="/eg-img/project-gibbon.png" alt="Screenshot of the Degreed product" className="block max-w-full rounded-xl sm:rounded-2xl" />
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
      <footer className='z-10 px-8 md:px-16 lg:px-24  pt-28 pb-20 min-h-[15vh] mt-[20vh] bg-[rgba(255,255,255,.25)] border-t border-t-[rgba(0,16,36,9%)]'>
        <div className='flex flex-wrap m-auto my-16 w-full max-w-6xl relative'>
          <div>
            <Image
              src="/hak_raj.svg"
              alt="hak_raj Logo"
              className="dark:invert mr-24"
              width={100}
              height={30}
              priority
            />
          </div>
          <div>
            <p className='text-sm font-light sm:w-1/2 '>
              Simplicity is the key to great user experiences. Let me help your company design a simpler user experience to achieve better outcomes.
            </p>
            <button className=" font-mono mt-10 mb-16 px-4 py-2 rounded-2xl shadow-xl bg-[rgba(0,16,36)] text-white hover:text-[rgba(0,16,36)] hover:bg-white ">Get in touch</button>
            {/* <ul className="my-12">
              <li className='inline-flex'><a href="/contact" className="mr-3 py-4 px-6 bg-black text-white ">Get in touch</a></li>
              <li className='inline-flex'><a className="text-[rgba(0,16,36,.6)] block relative p-2 top-4" href="https://www.linkedin.com/in/wouterdebres/" target="_blank" ><img src="/images/icon-linkedin.svg" alt="LinkedIn" /></a></li>
              <li className='inline-flex'><a className="text-[rgba(0,16,36,.6)] block relative p-2 top-4" href="http://twitter.com/wdeb" target="_blank" ><img src="/images/icon-twitter.svg" alt="Twitter" /></a></li>
              <li className='inline-flex'><a className="text-[rgba(0,16,36,.6)] block relative p-2 top-4" href="http://instagram.com/wouterdebres" target="_blank" ><img src="/images/icon-instagram.svg" alt="Instagram" /></a></li>
            </ul> */}
          </div>
          <div className='absolute right-4 bottom-4 text-sm font-mono text-slate-400 dark:text-slate-600'>&copy;hak_raj {year}</div>
        </div>
      </footer>
    </>
  )
}
