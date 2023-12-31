import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Nav = () => {
  return (
    <div className='nav z-10 w-full max-w-6xl flex items-center justify-between text-sm'>
      <Link href={"/"}>
        <Logo />
      </Link>


      <div className='space-x-8 sm:space-x-12 text-slate-500 font-medium'>
        <NavLinks />
      </div>
    </div>

  )
}

export default Nav;