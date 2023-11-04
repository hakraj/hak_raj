import Nav from "../components/Nav";
import ContactMe from "../components/Contact/Contact";
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 md:px-16 lg:px-24 ">
        <Nav />
        <ContactMe />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default Contact;