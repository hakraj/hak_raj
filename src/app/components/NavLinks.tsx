'use client'


import { usePathname } from 'next/navigation'
import Link from "next/link";


const NavLinks = () => {
  const pathname = usePathname()

  switch (pathname) {
    case "/":
      return (
        <>
          <Link className='text-black max-sm:hidden' href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </>
      )
    case "/about":
      return (
        <>
          <Link href={"/"}>Home</Link>
          <Link className='text-black/75 max-sm:hidden' href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </>
      )
    case "/contact":
      return (
        <>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link className='text-black max-sm:hidden' href={"/contact"}>Contact</Link>
        </>
      )
    default:
      return (
        <>
          <Link className='text-black max-sm:hidden' href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </>
      )
  }

}

export default NavLinks;