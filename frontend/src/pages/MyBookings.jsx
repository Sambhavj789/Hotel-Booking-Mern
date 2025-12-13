import "./MyBookings.css";
import demoBookingData from "../assets/demo_booking_details";
function MyBookings() {
    return (
        <section className="my-bookings-main">
            <div className="my-bookings-header">
                <div className="my-bookings-header-main">
                    <h2>My Bookings</h2>
                </div>

                <div className="my-bookings-filter">
                    <select>
                        <option>Select Bookings With Status</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                        <option>Accepted</option>
                        <option>Upcoming</option>
                    </select>
                </div>
            </div>

            <div className="my-bookings-container">
                {
                    demoBookingData.map((data, index) => {
                        return <div className="my-booking-card" key={index}>
                            <div className="my-booking-card-header">
                                <div className="my-booking-hotel-name">
                                    <h2>Hotel Name</h2>
                                    <div className="hotel-location">
                                        <span>Hotel Location</span>
                                    </div>
                                </div>
                                <div className="booking-id">
                                    <span>Booking Id: {data?.id.substring(0, 8)}</span>
                                </div>
                            </div>
                            <div className="my-booking-card-info">
                                <div>
                                    <span>Check-In Date</span>
                                    <span>{data?.check_in_date}</span>
                                </div>
                                <div>
                                    <span>Check-Out Date</span>
                                    <span>{data?.check_out_date}</span>
                                </div>
                                <div>
                                    <span>Book Date</span>
                                    <span>{data?.created_at}</span>
                                </div>
                                <div>
                                    <span>Number Of Guests</span>
                                    <span>{data?.number_of_guests}</span>
                                </div>
                                <div>
                                    <span>Room Name</span>
                                    <span>room name</span>
                                </div>
                                <div>
                                    <span>Payment Status</span>
                                    <span>{data?.payment_status}</span>
                                </div>
                            </div>
                            <div className="my-booking-card-footer">
                                <div className="my-booking-price">
                                    <span>₹1400</span>
                                </div>
                                <div className="my-booking-action">
                                    <div className="write-review">
                                        <span>Write Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default MyBookings;