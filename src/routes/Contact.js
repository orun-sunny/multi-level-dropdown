import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import AboutImg from "../assets/1.jpg"
function Contact (){

    return (
        <>
        <Navbar></Navbar>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title = "Contact"
        // text = "Choose your Favourite Destination"
        url ="/"
       
        btnClass = "hide"


        ></Hero>
        
        <ContactForm></ContactForm>
        <Footer></Footer>
        </>
    )
}

export default Contact;