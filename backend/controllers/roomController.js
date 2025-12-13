const Room = require("../models/Room");
async function getRoom(req, res) {
    try {
        const hotelID = req.params.hotelID;
        const roomsData = await Room.find({ hotel_id: hotelID });
        res.status(200).send({ success: true, message: "Success", data: roomsData });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
async function addRoom(req, res) {
    try {
        const data = req.body;
        const image = req.file.filename;
        if (typeof data.bed_type == "string") {
            data.bed_type = JSON.parse(data.bed_type)
        }
        const newRoom = new Room({ ...data, image: image });
        await newRoom.save();
        res.status(201).send({ success: true, message: "Room Added Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
async function updateRoom(req, res) {
    try {
        const data = req.body;
        const roomId = req.params.id;
        const existingImage = req.body.existingImage;
        const newImage = req.file?.filename;
        if (typeof data.bed_type == "string") {
            data.bed_type = JSON.parse(data.bed_type)
        }
        const image = existingImage || newImage;
        const newRoom = await Room.findByIdAndUpdate(roomId, { ...data, image });
        res.status(200).send({ success: true, message: "Success" })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
async function deleteRoom(req, res) {
    try {
        const id = req.params.id;
        await Room.findByIdAndDelete(id);
        res.status(200).send({ success: true, message: "Success" })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
module.exports = { getRoom, addRoom, updateRoom, deleteRoom };