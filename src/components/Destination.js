import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/6.jpg"
import mountain4 from "../assets/4.jpg"
import "./Destination.css"
import DestinationData from "./DestinationData"


const Destination = () => {

    return (
        <>
        <div className="destination">
            <h1 className="">Popular Destination</h1>
            <p>Tours give you the opportunity</p>

           <DestinationData
            className= "first-des"
            heading = "Lorem ipsum dolor sit amet."

            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et natus aut explicabo tenetur cum quisquam vero quis, suscipit expedita consequatur deleniti consectetur in. Delectus sapiente quasi impedit, eius inventore est blanditiis, praesentium necessitatibus nam voluptatem deleniti commodi similique ipsa."

            img1 = {mountain1}
            img2 = {mountain2}

           />

            <DestinationData
            heading = "Lorem6"
            className = "first-des-reverse"

            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et natus aut explicabo tenetur cum quisquam vero quis, suscipit expedita consequatur deleniti consectetur in. Delectus sapiente quasi impedit, eius inventore est blanditiis, praesentium necessitatibus nam voluptatem deleniti commodi similique ipsa."

            img1 = {mountain3}
            img2 = {mountain4}

           />
        </div>

        </>
    )


}

export default Destination