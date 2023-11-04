import Logo from "./Logo"
import Socials from "./socials"
import Copyright from "./copyright"
import FooterInfo from "./FooterInfo"


const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between pt-20 pb-16 px-8 md:px-16 lg:px-24 min-h-[15vh] sm:mt-[10vh] bg-[rgba(255,255,255,.25)] dark:bg-black/25 border-t border-t-[rgba(0,16,36,9%)]'>
      <div className='z-10 footer w-full max-w-6xl flex flex-wrap m-auto my-8 md:my-16 relative'>
        <div className="pr-24 mb-8">
          <Logo />
        </div>
        <FooterInfo />
        <div className="max-sm:mt-24 ">
          <div className='absolute right-4 bottom-4 '>
            <Socials />
            <Copyright />
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer;