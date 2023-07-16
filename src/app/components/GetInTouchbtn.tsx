'use client'

import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react";


const GetInTouchbtn = () => {

  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/contact");
  }

  return (
    <button onClick={handleClick} className=" font-mono my-8 max-sm:mb-24 px-4 py-2 rounded-xl shadow-xl bg-[rgba(0,16,36)] text-white hover:text-[rgba(0,16,36)] hover:bg-white ">Get in touch</button>
  )
}

export default GetInTouchbtn;