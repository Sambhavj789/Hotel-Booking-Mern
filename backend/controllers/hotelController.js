const Hotel = require("../models/Hotel");
const User = require("../models/User");
async function registerHotel(req, res) {
    try {
        const data = req.body;
        if(typeof data.policies == "string"){
            data.policies = JSON.parse(data.policies);
        }
        const images = req.files.map((image,index)=>image.filename);
        const userData = req.user;
        const newHotel = new Hotel({
            ...data, images: images, created_by: userData._id
        })
        await newHotel.save();
        const user = await User.findByIdAndUpdate(userData._id,{role:"hotel-manager"})
        res.status(201).send({ success: true, message: "Hotel Registered Successfully" });
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
async function updateHotel(req, res) {
    try {
        const hotelId = req.params.id;
        const data = req.body;
        const existingImages = req.body.existingImages ? JSON.parse(req.body.existingImages) : [];
        const newImages = req.files.map((image)=>image.filename);
        const images = [...existingImages,...newImages];
        if(typeof data.policies == "string"){
            data.policies = JSON.parse(data.policies);
        }
        const oldHotel = await Hotel.findById(hotelId);
        if (!oldHotel) {
            res.status(404).send({ success: false, message: "Hotel Not Found" });
        }
        const newHotel = await Hotel.findByIdAndUpdate(hotelId, { ...data, images: images });
        res.status(201).send({ success: true, message: "Hotel Updated Successfully" });
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}

async function getAllHotels(req, res) {
    try { }
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
async function getHotel(req, res) {
    try { }
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
module.exports = { registerHotel, updateHotel, getAllHotels, getHotel }