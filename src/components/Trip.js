import "./Trip.css"
import TripData from "./TripData";
import trip1 from "../assets/5.jpg"
import trip2 from "../assets/8.jpg"
import trip3 from "../assets/night.jpg"


function Trip (){
    return(
        <div className="trip">
            <h1>Recent Works</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>

            <div className="tripcard">
                <TripData
                image = {trip1}
                heading = "Business place"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam repellat? Eaque aperiam ut laborum, molestiae sapiente impedit aliquid provident quibusdam ullam dolorum perferendis earum est ex officia quos hic."
                
                />

                <TripData
                image = {trip2}
                heading = "Business place"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam repellat? Eaque aperiam ut laborum, molestiae sapiente impedit aliquid provident quibusdam ullam dolorum perferendis earum est ex officia quos hic."
                
                />
                <TripData
                image = {trip3}
                heading = "Business place"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam repellat? Eaque aperiam ut laborum, molestiae sapiente impedit aliquid provident quibusdam ullam dolorum perferendis earum est ex officia quos hic."
                
                />
            </div>
        </div>
    );
}

export default Trip;