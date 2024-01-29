import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function Goals (){

    return (
        <>
        <Navbar></Navbar>
        <Hero
        cName = "hero-mid"
        heroImg = "https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R29hbHN8ZW58MHx8MHx8fDI%3D"
        title = "Goals"
        // text = "Choose your Favourite Destination"
        url ="/"
       
        btnClass = "hide"


        ></Hero>

        <Footer></Footer>
        </>
    )
}

export default Goals;