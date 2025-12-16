import { useNavigate } from "react-router-dom";
import "./HotelCard.css"
import { FaLocationDot } from "react-icons/fa6";
function HotelCard({ data }) {
    // console.log(data);
    const navigate = useNavigate();
    return (
        <div id="hotel-card">
            <div id="hotel-image">
                <img src={data.image} alt={data.name} />
                <div id="hotel-category">{data.category}</div>
            </div>
            <div id="hotel-data">
                <div id="hotel-location">
                    <FaLocationDot/>
                    <span>{data.location}</span>
                </div>
                <div id="hotel-name">
                    <span>{data.name}</span>
                </div>
                <div id="hotel-rating">
                    <span>{data.rating}</span>
                </div>
                <div id="hotel-price">
                    <p>₹{data.pricePerNight}</p>
                    <span>/night</span>
                </div>
                <div id="hotel-book-btn">
                    <button onClick={()=>{
                        navigate(`/hotel/${data.id}`)
                    }}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default HotelCard;