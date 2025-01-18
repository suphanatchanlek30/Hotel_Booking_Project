const Room = require('../models/Room');
const { cloudinary } = require('../config/cloudinary');

const imageController = {
  // อัพโหลดรูปภาพ
  uploadImages: async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'กรุณาเลือกรูปภาพ' });
      }

      const imageUrls = req.files.map(file => file.path);
      res.json({ imageUrls });
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาดในการอัพโหลด', error: error.message });
    }
  },

  // ลบรูปภาพ
  deleteImage: async (req, res) => {
    try {
      const { public_id } = req.body;
      
      if (!public_id) {
        return res.status(400).json({ message: 'กรุณาระบุรูปภาพที่ต้องการลบ' });
      }

      await cloudinary.uploader.destroy(public_id);
      res.json({ message: 'ลบรูปภาพเรียบร้อย' });
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาดในการลบรูปภาพ', error: error.message });
    }
  },

  // อัพเดทรูปภาพห้องพัก
  updateRoomImages: async (req, res) => {
    try {
      const { roomId } = req.params;
      const { images } = req.body;

      const room = await Room.findByIdAndUpdate(
        roomId,
        { images },
        { new: true }
      );

      if (!room) {
        return res.status(404).json({ message: 'ไม่พบห้องพัก' });
      }

      res.json(room);
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาดในการอัพเดทรูปภาพ', error: error.message });
    }
  }
};

module.exports = imageController;