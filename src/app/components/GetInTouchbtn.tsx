'use client'

import { useRouter } from "next/navigation";

const GetInTouchbtn = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.push("/contact")} className=" select-none font-mono my-8 px-4 py-2 rounded-xl shadow-xl bg-gradient-to-br outline-0 from-[#d7d7ff] to-[#aa9bff] text-white hover:text-black/25  ">Get in touch</button>
  )
}

export default GetInTouchbtn;