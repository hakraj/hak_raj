import Nav from "../components/Nav";
import AboutMe from "../components/About/AboutMe";
import Footer from "../components/Footer";



const About = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 md:px-16 lg:px-24 ">
        <Nav />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default About;