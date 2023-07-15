'use client'

import Link from "next/link";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const year = new Date().getFullYear();


const Contact = () => {
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
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>

        <section className='z-10 contact w-full max-w-6xl py-28'>
          <div className="min-h-[40vh] m-auto">
            <div className="lg:w-3/5" data-aos="zoom-out-up" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
              <h1 className="text-4xl leading-normal font-medium">Get in Touch!</h1>
              <p className="text-slate-600 dark:text-slate-400 text-xl my-6 font-light leading-relaxed">Hey there! If you have any questions, exciting ideas, or just want to chat about web development, feel free to drop me a message. I&apos;m always here and ready to connect with awesome people like you!</p>
            </div>
            <div className="grid sm:grid-cols-2  lg:w-4/5">
              <div className="py-4" data-aos="zoom-out-up" data-aos-delay="100" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                <p className="text-slate-500 font-extralight">
                  Send me an email
                  <svg className="inline ml-2 w-5 h-5" fill="none" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m2 11.9556c0-3.48482 0-5.2272.67818-6.55821.59655-1.17078 1.54843-2.12266 2.71921-2.71921 1.33101-.67818 3.07339-.67818 6.55821-.67818h8.0888c3.4848 0 5.2272 0 6.5582.67818 1.1708.59655 2.1227 1.54843 2.7192 2.71921.6782 1.33101.6782 3.07339.6782 6.55821v8.0888c0 3.4848 0 5.2272-.6782 6.5582-.5965 1.1708-1.5484 2.1227-2.7192 2.7192-1.331.6782-3.0734.6782-6.5582.6782h-8.0888c-3.48482 0-5.2272 0-6.55821-.6782-1.17078-.5965-2.12266-1.5484-2.71921-2.7192-.67818-1.331-.67818-3.0734-.67818-6.5582z" fill="#fff" /><path d="m22.0515 8.52295-5.9871 4.67245-6.12397-4.67245v.00126l.0074.00632v6.54267l6.04757 4.7734 6.0561-4.5891z" fill="#ea4335" /><path d="m23.6231 7.38639-1.5723 1.13653v6.73458l4.9475-3.7985v-2.28826s-.6005-3.26816-3.3752-1.78435z" fill="#fbbc05" /><path d="m22.0508 15.2575v8.7349h3.792s1.0791-.1111 1.1567-1.3411v-11.1923z" fill="#34a853" /><g fill="#c5221f"><path d="m9.94811 24.0001v-8.9269l-.00768-.0063z" /><path d="m9.94014 8.52404-1.56368-1.13022c-2.77467-1.48381-3.37646 1.7831-3.37646 1.7831v2.28818l4.94014 3.6016z" /><path d="m9.94043 8.52441v6.54269l.00768.0063v-6.54267z" /></g><path d="m5 11.4668v11.1923c.07646 1.2313 1.15673 1.3412 1.15673 1.3412h3.79204l-.00863-8.9332z" fill="#4285f4" /></svg>
                </p>
                <p className="text-xl font-light leading-relaxed my-2"><a href="mailto:hakeemraji1000@gmail.com">hakeemraji1000@gmail.com</a></p>
              </div>
              <div className="py-4" data-aos="zoom-out-up" data-aos-delay="200" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                <p className="text-slate-500 font-extralight">
                  Chat on Whatsapp
                  <svg className="inline ml-2 w-5 h-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><filter id="a" height="200%" width="200%" x="-50%" y="-50%"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3" /></filter><linearGradient id="b" x1="49.998491%" x2="49.998491%" y1="99.992935%" y2="-.005588%"><stop offset="0" stopColor="#20b038" /><stop offset="1" stopColor="#60d66a" /></linearGradient><g transform="translate(6 7)"><path d="m.29672013 244 17.15549617-62.594378c-10.54831183-18.314651-16.17021429-39.121486-16.11225654-60.391983 0-66.651421 54.24846084-120.8419241 120.89988224-120.8419241 32.340428 0 62.710293 12.5768333 85.487692 35.4121897 22.835356 22.8353564 35.412189 53.2052213 35.354232 85.4876924 0 66.651421-54.248461 120.841924-120.899882 120.841924h-.057958c-20.227257 0-40.106768-5.100283-57.783884-14.721271zm67.05712527-38.715782 3.6513387 2.202395c15.4167634 9.157326 33.0938799 13.967819 51.1187419 14.025777h.057958c55.349658 0 100.440793-45.033177 100.440793-100.440793 0-26.834442-10.432396-52.0460664-29.384583-71.0562108-18.952186-19.0101444-44.221769-29.4425407-71.05621-29.4425407-55.4076162 0-100.4987514 45.0331774-100.4987514 100.4407935 0 18.952187 5.2741559 37.440711 15.3588057 53.437052l2.376268 3.825212-10.1426075 37.035007z" fillOpacity=".24" filter="url(#a)" /><path d="m5.7810682 237.538941 16.3701535-59.699546c-10.0739406-17.457681-15.39710242-37.319371-15.39710242-57.581729 0-63.5345117 51.74342232-115.22069569 115.22069572-115.22069569 30.851443 0 59.756784 12.02004279 81.507338 33.77059639s33.713358 50.7131329 33.713358 81.5073373c0 63.534512-51.743422 115.220696-115.220696 115.220696h-.057238c-19.289307 0-38.2351839-4.865255-55.0632438-14.023383z" fill="url(#b)" /><g fill="#fff"><path d="m1.60267237 241.717337 16.94253653-61.817363c-10.41737044-18.087303-15.96948545-38.635852-15.91224715-59.642308 0-65.8240437 53.57504785-119.34185322 119.39909125-119.34185322 31.938971 0 61.93184 12.42071092 84.426491 34.97260072 22.55189 22.5518898 34.972601 52.5447584 34.915363 84.4264905 0 65.824044-53.575048 119.341854-119.399092 119.341854h-.057238c-19.976166 0-39.6089031-5.03697-57.0665842-14.538528zm66.22471193-38.235184 3.6060128 2.175055c15.2253876 9.043652 32.6830689 13.79443 50.4841799 13.851669h.057238c54.662576 0 99.193972-44.474159 99.193972-99.193973 0-26.501332-10.302894-51.399992-29.019817-70.1741541-18.716924-18.7741621-43.672822-29.0770559-70.174155-29.0770559-54.7198137 0-99.2512103 44.4741583-99.2512103 99.193972 0 18.716924 5.2086852 36.975941 15.1681492 52.773712l2.3467703 3.777728-10.0167023 36.575273z" /><path d="m92.1536614 70.2886312c-2.2322937-4.9797321-4.5790639-5.0942086-6.696881-5.1514469-1.717149-.0572383-3.7204894-.0572383-5.7238299-.0572383s-5.2086852.7440978-7.9561236 3.7204894c-2.7474383 2.9763915-10.4173704 10.1884172-10.4173704 24.89866 0 14.6530046 10.7035619 28.8481026 12.1917577 30.8514436 1.4881958 2.00334 20.6630259 33.083736 50.9420858 45.046541 25.184852 9.959464 30.336299 7.956123 35.773937 7.440979 5.494877-.515145 17.629396-7.212026 20.147881-14.195098 2.461247-6.983073 2.461247-12.935856 1.717149-14.195099-.744097-1.259242-2.747438-2.00334-5.72383-3.491536-2.976391-1.488196-17.629396-8.700221-20.376834-9.730511-2.747438-1.030289-4.750779-1.488195-6.696881 1.488196-2.00334 2.976392-7.72717 9.673273-9.444319 11.676613-1.717149 2.003341-3.491537 2.232294-6.467928.744098-2.976392-1.488196-12.592426-4.636302-23.982847-14.824719-8.871937-7.898886-14.8819581-17.686635-16.599107-20.663026-1.717149-2.976392-.1717149-4.579064 1.3164808-6.06726 1.3164809-1.316481 2.9763916-3.491536 4.4645874-5.208685s2.0033408-2.9763918 2.9763918-4.9797322c.973051-2.0033405.515144-3.7204895-.228953-5.2086852-.744098-1.4881958-6.5824049-16.1984386-9.2153666-22.0939834z" /></g></g></svg>
                </p>
                <p className="text-xl font-light leading-relaxed my-2"><a href="https://wa.me/+234901690339">+234 901 692 0339</a></p>
              </div>
              <div className="py-4" data-aos="zoom-out-up" data-aos-delay="300" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                <p className="text-slate-500 font-extralight">
                  Follow me on Twitter
                  <svg className="inline ml-2 w-5 h-5" viewBox="0 0 126.24 102.59" xmlns="http://www.w3.org/2000/svg"><path d="m40.58 115.3c47.64 0 73.69-39.47 73.69-73.69 0-1.12 0-2.24-.07-3.35a52.7 52.7 0 0 0 12.92-13.41 51.7 51.7 0 0 1 -14.87 4.08 26 26 0 0 0 11.38-14.33 51.9 51.9 0 0 1 -16.45 6.29 25.92 25.92 0 0 0 -44.13 23.62 73.53 73.53 0 0 1 -53.38-27.06 25.92 25.92 0 0 0 8 34.58 25.71 25.71 0 0 1 -11.67-3.25v.33a25.91 25.91 0 0 0 20.73 25.39 25.86 25.86 0 0 1 -11.7.44 25.93 25.93 0 0 0 24.2 18 52 52 0 0 1 -32.17 11.06 52.72 52.72 0 0 1 -6.18-.36 73.32 73.32 0 0 0 39.7 11.63" fill="#1da1f2" transform="translate(-.88 -12.7)" /></svg>
                </p>
                <p className="text-xl font-light leading-relaxed my-2"><a href="https://wa.me/+234901690339">twitter.com/hak_raj_codes</a></p>
              </div>
              <div className="py-4" data-aos="zoom-out-up" data-aos-delay="400" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                <p className="text-slate-500 font-extralight">
                  Connect on LinkedIn
                  <svg className="inline ml-2 w-5 h-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z" fill="#0076b2" /><g fill="#fff"><path d="m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49" /><path d="m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z" /></g></svg>
                </p>
                <p className="text-xl font-light leading-relaxed my-2"><a href="https://wa.me/+234901690339">linkedin.com/***</a></p>
              </div>
              {/* className="inline ml-1 w-5 h-5" */}
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
            <div className='flex space-x-3 justify-end mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </div>
            <p className='text-xs font-mono text-slate-400 '>&copy; hak_raj {year}</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Contact;