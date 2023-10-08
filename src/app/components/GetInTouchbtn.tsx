import Link from "next/link";

const GetInTouchbtn = () => {
  return (
    <Link href="/contact">
      <button className=" font-mono my-8 px-4 py-2 rounded-xl shadow-xl bg-[rgba(0,16,36)] text-white hover:text-[rgba(0,16,36)] hover:bg-white ">Get in touch</button>
    </Link>
  )
}

export default GetInTouchbtn;