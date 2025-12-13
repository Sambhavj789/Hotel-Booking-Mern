import "./ManageRooms.css";
import { LuUsers } from "react-icons/lu";
import { FaBed, FaEdit } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import demoHotels from "../assets/demo_hotels_data";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
function ManageRooms() {
    const hotelData = demoHotels[0];
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    function getBedNames(bed_types) {
        let ans = "";
        let arr = Object.entries(bed_types);
        for (let i of arr) {
            if (i[1] > 0) {
                ans += `${i[1]} ${i[0]} Bed + `
            }
        }
        ans = ans.substring(0, ans.length - 2);
        return ans;
    }
    return (
        <>
            {isPopUpOpen && <div className="add-room-pop-up">
                <div className="add-room-pop-up-container">
                    <div className="add-room-pop-up-header">
                        <h2>{isEditMode ? "Edit Room" : "Add Room"}</h2>
                        <span className="close-pop-up">
                            <RxCross2 onClick={() => setIsPopUpOpen(false)} />
                        </span>
                    </div>

                    <form className="add-room-form-grid">
                        <div className="add-room-form-columns">
                            <label htmlFor="">Hotel Name</label>
                            <input type="text" />
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Base Price</label>
                            <input type="number" />
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Total Rooms</label>
                            <input type="number" />
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Capacity</label>
                            <input type="number" />
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Size (in sqfeet)</label>
                            <input type="number" />
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Description</label>
                            <textarea></textarea>
                        </div>
                        <div className="add-room-bed">
                            <label htmlFor="">Beds Configuration</label>
                            <div className="add-room-form-columns">
                                <label htmlFor="">King Beds</label>
                                <input type="number" />
                            </div>
                            <div className="add-room-form-columns">
                                <label htmlFor="">Queen Beds</label>
                                <input type="number" />
                            </div>
                            <div className="add-room-form-columns">
                                <label htmlFor="">Twin Beds</label>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="add-room-form-columns">
                            <label htmlFor="">Image</label>
                            <input type="file" />
                        </div>
                    </form>

                    <div className="add-room-pop-up-footer">
                        <button>Submit</button>
                        <button onClick={() => setIsPopUpOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>}

            <section className="manage-rooms">
                <div className="manage-rooms-header">
                    <h1>Manage Rooms</h1>
                    <div className="add-room-btn">
                        <button onClick={() => {
                            setIsEditMode(false)
                            setIsPopUpOpen(true)
                        }}>Add Room</button>
                    </div>
                </div>

                <div className="manage-rooms-rooms-grid">
                    {
                        hotelData?.rooms?.map((roomData, index) => {
                            return <div className="room-card" key={index}>
                                <div className="room-image">
                                    <img src={roomData.image} alt="" />
                                </div>
                                <div className="room-details">
                                    <div className="room-header">
                                        <h3>{roomData?.name}</h3>
                                        <div className="room-info">
                                            <div>
                                                <span><LuUsers /></span>
                                                <span>{roomData.capacity} Adults</span>
                                            </div>
                                            <div>
                                                <span><FaBed /></span>
                                                <span>
                                                    {
                                                        getBedNames(roomData.bed_type)
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <span><FaRegMap /></span>
                                                <span>{roomData.size_sqft} sq feet</span>
                                            </div>
                                        </div>
                                        <div className="room-description">
                                            {roomData.description}
                                        </div>
                                    </div>
                                    <div className="room-footer">
                                        <div className="room-price"><span>₹{roomData.base_price}</span>
                                            <span>/ night</span>
                                        </div>
                                        <div className="manage-room-book-btn">
                                            <FaEdit className="edit-room-btn" onClick={() => {
                                                setIsEditMode(true)
                                                setIsPopUpOpen(true)
                                            }} />
                                            <MdDelete className="delete-room-btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default ManageRooms;