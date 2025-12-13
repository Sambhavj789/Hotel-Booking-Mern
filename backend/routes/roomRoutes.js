const express = require("express");
const { getRoom, addRoom, updateRoom, deleteRoom } = require("../controllers/roomController");
const upload = require("../config/upload");
const authMiddleware = require("../middlewares/authMiddleware");
const checkOwnerMiddleware = require("../middlewares/checkOwnerMiddleware");
const router = express.Router();
router.get("/:hotelID", getRoom);
router.post("/", authMiddleware, checkOwnerMiddleware, upload.single("image"),addRoom);
router.put("/:id", authMiddleware, checkOwnerMiddleware, upload.single("image"),updateRoom);
router.delete("/:id", authMiddleware, checkOwnerMiddleware, deleteRoom)
module.exports = router;