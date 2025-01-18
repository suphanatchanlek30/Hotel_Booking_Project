const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const { uploadCloud } = require('../config/cloudinary');
const { auth, adminAuth } = require('../middlewares/auth');

// อัพโหลดรูปภาพหลายรูป (admin only)
router.post('/upload', auth, adminAuth, uploadCloud.array('images', 10), imageController.uploadImages);

// ลบรูปภาพ (admin only)
router.delete('/delete', auth, adminAuth, imageController.deleteImage);

// อัพเดทรูปภาพห้องพัก (admin only)
router.put('/room/:roomId', auth, adminAuth, imageController.updateRoomImages);

module.exports = router;