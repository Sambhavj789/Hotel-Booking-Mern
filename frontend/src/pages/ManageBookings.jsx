import "./ManageBookings.css";
import demoBookingsData from "../assets/demo_booking_details";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function ManageBookings() {
    // console.log(demoBookingsData)
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    function bookingStatusClass(status) {
        if (status == "confirmed" || status == "success") {
            return "status-confirmed"
        }
        else if (status == "cancelled") {
            return "status-cancelled"
        }
        else if (status == "refunded") {
            return "status-refunded"
        }
        else {
            return "status-pending"
        }
    }
    return (
        <>
            {isPopUpOpen && <div className="manage-bookings-pop-up">
                <div className="manage-bookings-pop-up-container">
                    <div className="add-room-pop-up-header">
                        <h2>Booking Details</h2>
                        <span className="close-pop-up">
                            <RxCross2 onClick={() => setIsPopUpOpen(false)} />
                        </span>
                    </div>

                    <div className="manage-booking-grid">
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns">
                            <span className="manage-booking-column-label">Booking Id</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>
                        <div className="manage-bookings-columns special-requests-column">
                            <span className="manage-booking-column-label">Special Requests</span>
                            <span className="manage-booking-column-value">Booking Id</span>
                        </div>


                    </div>

                    <div className="manage-bookings-pop-up-footer">
                        <button className="confirm-booking-btn">Confirm Booking</button>
                        <button className="cancel-booking-btn">Cancel Booking</button>
                        <button className="mark-complete-booking-btn">Mark As Completed</button>
                        <button onClick={() => setIsPopUpOpen(false)} className="close-btn">Close</button>
                    </div>
                </div>
            </div>}

            <section className="manage-bookings">
                <div className="manage-bookings-header">
                    <h1>All Bookings</h1>
                    <div className="manage-bookings-filter">
                        <select>
                            <option value="">All Status</option>
                            <option value="">Accepted</option>
                            <option value="">Confirmed</option>
                            <option value="">Cancelled</option>
                            <option value="">Completed</option>
                        </select>
                        <input type="date" />
                    </div>
                </div>

                <div className="manage-bookings-content">
                    <table className="manage-bookings-table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Guest</th>
                                <th>Room</th>
                                <th>Check-In</th>
                                <th>Check-Out</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                demoBookingsData.map((bookingData, index) => {
                                    return <tr key={index}>
                                        <td>{bookingData.id.substring(0, 8)}...</td>
                                        <td>User 1</td>
                                        <td>Deluxe Room</td>
                                        <td>{bookingData.check_in_date}</td>
                                        <td>{bookingData.check_out_date}</td>
                                        <td>{bookingData.final_amount}</td>
                                        <td><span className={bookingStatusClass(bookingData.status)}>{bookingData.status}</span></td>
                                        <td><span className={bookingStatusClass(bookingData.payment_status)}>{bookingData.payment_status}</span></td>
                                        <td><button className="view-booking-btn" onClick={()=>{
                                            setIsPopUpOpen(true)
                                        }}>View</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ManageBookings