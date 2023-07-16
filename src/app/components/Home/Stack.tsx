'use client'

import Image from 'next/image';

import styles from "../../styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const stackNames01 = ["React", "Node.js", "Typescript", "Express", "HTML", "Javascript", "CSS", "Next.js", "Tailwindcss", "mongodb", "Bootstrap", "mySQL", "Git", "Api",]
const stackNames02 = ["OAuth", "JSON", "material-ui", "JQuery", "Vercel", "Heroku", "Netlify", "Passport", "Github", "VS Code", "npm", "Postman"]


const Stack = () => {

  const [stack, setStack] = useState(false);
  const stackNames = !stack ? stackNames01 : stackNames02;

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={`stack ${styles.incomplete} p-10 w-fit m-auto`} data-aos="flip-right" data-aos-delay="300" data-aos-offset="180" data-aos-duration="1500" data-aos-easing="ease-out-quad" data-aos-anchor-placement="right-left" data-aos-once="true">
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 ' >
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
              <div className={`w-full mt-1 h-[2px] ${styles.animateGradient}`} ></div>
            </div>
          )
        })}
      </div>
      <div onClick={() => { setStack(!stack) }} className='absolute z-10 bottom-4 right-6 text-xs text-violet-900 font-mono cursor-pointer'>{!stack ? "see more" : "go back"}</div>
    </div>

  )
}

export default Stack;