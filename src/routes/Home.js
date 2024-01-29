import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"
import Team from "../components/Team"
import HeroSection from "../components/HeroSection"
function Home() {

    return (
        <>
            <Navbar></Navbar>
            {/* <HeroSection></HeroSection> */}

            {/* <Hero></Hero> */}
            <Hero
                cName="hero"
                heroImg="https://images.pexels.com/photos/1737957/pexels-photo-1737957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Your Journey Your Story"
                text="Choose your Path."
                url="/"
                buttonText="Book Appointment"
                btnClass="show"


            ></Hero>

            <Destination />

            <Trip></Trip>

            <Team></Team>

            <Footer></Footer>
        </>
    )
}

export default Home;
