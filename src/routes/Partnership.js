import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function Partnership(){

    return (
        <>
        <Navbar></Navbar>
        <Hero
        cName = "hero-mid"
        heroImg = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Partnership"
        // text = "Choose your Favourite Destination"
        url ="/"
       
        btnClass = "hide"


        ></Hero>

        <Footer></Footer>
        </>
    )
}

export default Partnership;