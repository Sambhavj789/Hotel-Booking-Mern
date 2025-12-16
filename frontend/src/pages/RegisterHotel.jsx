import { useState } from "react";
import "./RegisterHotel.css";
function RegisterHotel() {
    const [images, setImages] = useState([]);
    function handleImageChange(e) {
        console.log(e.target.files);
        let currImages = e.target.files;
        const temp = [...images,...currImages];
        setImages(temp);
    }
    function handleRemoveImage(index) {
        setImages(images.filter((_, ix) => ix != index))
    }
    return (
        <div className="register-hotel-form-container">
            <form className="register-hotel-form">
                <h1>Register Your Hotel</h1>
                <div className="register-hotel-form-section">
                    <h2>Basic Details</h2>
                    <div className="register-hotel-column">
                        <label htmlFor="">Hotel Name</label>
                        <input type="text" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Hotel Category</label>
                        <select>
                            <option value="">Select Hotel Category</option>
                            <option value="">Option</option>
                            <option value="">Option</option>
                            <option value="">Option</option>
                            <option value="">Option</option>

                        </select>
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Hotel Average Price</label>
                        <input type="number" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Hotel Description</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="register-hotel-form-section">
                    <h2>Location Details</h2>
                    <div className="register-hotel-column">
                        <label htmlFor="">City</label>
                        <input type="text" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">State</label>
                        <input type="text" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Country</label>
                        <input type="text" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Full Address</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="register-hotel-form-section">
                    <h2>Hotel Facts</h2>
                    <div className="register-hotel-column">
                        <label htmlFor="">Check-In Time</label>
                        <input type="time" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Check-Out Time</label>
                        <input type="time" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Contact Email</label>
                        <input type="email" />
                    </div>
                    <div className="register-hotel-column">
                        <label htmlFor="">Contact Phone</label>
                        <input type="number" />
                    </div>
                </div>
                <div className="register-hotel-form-section">
                    <h2>Policies</h2>
                    <div className="register-hotel-column">
                        <label htmlFor="">Cancellation Policy</label>
                        <textarea></textarea>
                    </div>
                    <div className="register-hotel-pet-section">
                        <input type="checkbox" />
                        <label htmlFor="">Pets Allowed</label>
                    </div>
                </div>
                <div className="register-hotel-form-section">
                    <h2>Hotel Images</h2>
                    <div className="register-hotel-column">
                        <input type="file" multiple onChange={(e) => handleImageChange(e)} />
                        <div className="images-preview">
                            {
                                images.map((image, index) => {
                                    return <div className="image-preview-container" key={index}>
                                        <img src={URL.createObjectURL(image)} alt="" />
                                        <div className="cross-image" onClick={() => handleRemoveImage(index)}>X</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="register-hotel-submit-form">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterHotel;

/* 
d1.oncl(0)
d2.onc(1)
d3.onc(2)
*/