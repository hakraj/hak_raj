import GetInTouchbtn from "../GetInTouchbtn";
import Socials from "../socials";


const AboutTitle = () => {
  return (
    <div className="lg:w-2/5 m" data-aos="fade-right" data-aos-delay="0" data-aos-offset="180" data-aos-duration="1000" data-aos-easing="ease-out-quad" data-aos-anchor-placement="top-bottom" data-aos-once="true">
      <h1 className="text-4xl leading-normal font-medium">Hakeem Raji Adekunle&mdash;<br /><span>Brilliant Young Mind</span></h1>
      <div className="flex flex-wrap items-center space-x-12">

        <GetInTouchbtn />
        <Socials />
      </div>
    </div>

  )
}

export default AboutTitle;