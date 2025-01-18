const Room = require('../models/Room');

const roomController = {
  // ดึงห้องพักทั้งหมด
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: error.message });
    }
  },

  // ดึงห้องพักตาม ID
  getRoomById: async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      if (!room) {
        return res.status(404).json({ message: 'ไม่พบห้องพัก' });
      }
      res.json(room);
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: error.message });
    }
  },

  // สร้างห้องพักใหม่
  createRoom: async (req, res) => {
    try {
      const room = new Room(req.body);
      await room.save();
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ message: 'ไม่สามารถสร้างห้องพักได้', error: error.message });
    }
  },

  // อัพเดทห้องพัก
  updateRoom: async (req, res) => {
    try {
      const room = await Room.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true }
      );
      if (!room) {
        return res.status(404).json({ message: 'ไม่พบห้องพัก' });
      }
      res.json(room);
    } catch (error) {
      res.status(400).json({ message: 'ไม่สามารถอัพเดทห้องพักได้', error: error.message });
    }
  },

  // ลบห้องพัก
  deleteRoom: async (req, res) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
      if (!room) {
        return res.status(404).json({ message: 'ไม่พบห้องพัก' });
      }
      res.json({ message: 'ลบห้องพักเรียบร้อย' });
    } catch (error) {
      res.status(500).json({ message: 'ไม่สามารถลบห้องพักได้', error: error.message });
    }
  }
};

module.exports = roomController;