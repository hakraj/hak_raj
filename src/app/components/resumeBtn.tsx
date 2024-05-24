'use client'

import styles from "../styles.module.css"
import { useRouter } from "next/navigation";

const ResumeBtn = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.push("https://drive.google.com/file/d/14t1TxNoy42UXzcVfd-DqOTET3zYe0SRK/view?usp=drive_link")} className={`${styles.contactBtn} font-mono my-8 px-4 py-2 rounded-xl shadow-xl bg-gradient-to-br outline-0 from-[#d7d7ff] to-[#aa9bff] text-white hover:text-black/25  `}>View my resume</button>
  )
}

export default ResumeBtn;