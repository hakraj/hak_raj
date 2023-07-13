'use client'

import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const stackNames01 = ["React", "Node.js", "Typescript", "Express", "HTML", "Javascript", "CSS", "Next.js", "Tailwindcss", "mongodb", "Bootstrap", "mySQL", "Git", "Api",]
const stackNames02 = ["OAuth", "JSON", "material-ui", "JQuery", "Vercel", "Heroku", "Netlify", "Passport", "Github", "VS Code", "npm", "Postman"]


export default function Home() {

  const [stack, setStack] = useState(false);
  const stackNames = !stack ? stackNames01 : stackNames02;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 lg:px-24 ">

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

      <section className='intro z-10 w-full max-w-6xl py-28'>
        <div className='pt-[10vh] min-h-[30vh] '>
          <p className='mb-4 font-light font-mono text-slate-500 ' data-aos="fade-right" data-aos-delay="150" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">Hakeem Raji | Web developer</p>
          <h1 className='text-4xl leading-normal mb-4 font-medium' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1100" data-aos-easing="ease-out-quad" data-aos-once="true">I craft dynamic web app with seamless user experiences.</h1>
          {/* <button className='border border-black bg-inherit px-2 py-1 text-sm hover:bg-black hover:text-white'>Contact me</button> */}
        </div>
      </section>

      <section className='pitch&stack w-full max-w-6xl pt-28 pb-20 flex flex-wrap items-stretch justify-between'>
        <div className='pitch md:w-1/2 '>
          <div className='bg-black text-white w-fit p-1 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>

          </div>
          <h2 className='text-2xl font-medium my-8 '>Build for the web</h2>
          {/* <p className='md:w-1/2 my-8'>Are you looking to bring your web development project to life? Look no further! Our experienced full-stack web developer can handle both the front-end and back-end development, ensuring a seamless and efficient website or application. With expertise in the latest technologies and frameworks, we can create robust and scalable solutions tailored to your specific needs. From stunning user interfaces to secure database management, we&apos;ve got you covered. Let&apos;s collaborate and build something amazing together!</p> */}
          <p className='leading-relaxed text-slate-600'>Passionate about crafting exceptional web experiences, I bring a unique blend of creativity and technical expertise to every project. With a keen eye for design and a deep understanding of front-end and back-end technologies, I can turn your ideas into reality. From building intuitive user interfaces to developing robust server-side logic, I strive to create seamless and performant web applications. Let&apos;s collaborate and create something remarkable together! 🚀🌏</p>
        </div>
        <div className='stack incomplete-border p-10 w-fit '>
          <div className='grid grid-cols-2 sm:grid-cols-3 '>
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
          <div onClick={() => { setStack(!stack) }} className='absolute z-10 bottom-6 right-6 text-xs text-violet-500 font-mono cursor-pointer'>{!stack ? "see more" : "go back"}</div>
        </div>

      </section>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/hak_raj.svg"
              alt="hak_raj Logo"
              className="dark:invert"
              width={100}
              height={30}
              priority
            />
          </a>
        </div>
      </div> */}


      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
