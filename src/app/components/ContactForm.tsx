"use client"

import { useForm } from "@formspree/react";
import styles from "../styles.module.css"

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xknlezon');

  if (!state.errors && state.succeeded) {
    return (
      <div>
        <h1 className="text-3xl leading-normal mb-4">Thanks for reaching out! <span className=" text-red-600">❤</span></h1>
      </div>
    )
  }


  return (
    <div data-aos="zoom-out-up" data-aos-delay="50" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
      <h1 className="text-2xl leading-normal mb-4">Leave a message <span className=" text-red-600">❤</span></h1>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-wrap justify-between max-sm:gap-y-4 sm:gap-8 my-4">
          <div className="relative max-sm:w-full">
            <input className={` transition-all max-sm:w-full bg-transparent border-0 outline-0 px-4 py-2 ${styles.contactInput}`} required name="name" type="text" placeholder=" " />
            <label className={`${styles.label} text-slate-400`}>Name</label>
          </div>
          <div className=" relative max-sm:w-full">
            <input className={` max-sm:w-full bg-transparent border-0 outline-0 px-4 py-2 ${styles.contactInput}`} required name="email" type="email" placeholder=" " />
            <label className={`${styles.label} text-slate-400`}>Email</label>
          </div>
        </div>
        <textarea className={` w-full bg-transparent border-0 outline-0 px-4 py-2 ${styles.contactInput} placeholder-slate-400`} required rows={2} name="message" placeholder="Type message here" />
        <div className=" text-center">
          <button disabled={state.submitting} type="submit" className=" font-mono my-8 px-4 py-2 rounded-xl shadow-xl bg-gradient-to-br from-[#d7d7ff] to-[#aa9bff] text-white hover:text-black/25 ">Contact me</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;