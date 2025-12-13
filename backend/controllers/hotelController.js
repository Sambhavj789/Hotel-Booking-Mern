const Hotel = require("../models/Hotel");
async function registerHotel(req, res) {
    try {
        const data = req.body;
        const images = req.files;
        const userData = req.user;
        const newHotel = new Hotel({
            ...data, images: images, created_by: userData._id
        })
        await newHotel.save();
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
        const images = req.files;
        const oldHotel = await Hotel.findById(hotelId);
        if (!oldHotel) {
            res.status(404).send({ success: false, message: "Hotel Not Found" });
        }
        const newHotel = await Hotel.findByIdAndUpdate(hotelId, { ...data, image: images });
        res.status(201).send({ success: true, message: "Hotel Registered Successfully" });
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