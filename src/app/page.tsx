import Nav from './components/Nav';
import IntroHome from './components/Home/intro';
import Feature from "./components/Home/Feature"
import Projects from './components/Home/Projects';
import Footer from './components/Footer';


const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 md:px-16 lg:px-24 ">
        <Nav />
        <IntroHome />
        <Feature />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default Home;