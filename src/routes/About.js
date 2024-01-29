import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutImg from "../assets/2.jpg"
function About (){

    return (
        <>
        <Navbar></Navbar>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title = "About"
        // text = "Choose your Favourite Destination"
        url ="/"
       
        btnClass = "hide"


        ></Hero>

        <Footer></Footer>
        </>
    )
}

export default About;