const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authController = {
  // ลงทะเบียน
  register: async (req, res) => {
    try {
      const { username, password, role } = req.body;
      
      // ตรวจสอบว่ามี username ซ้ำไหม
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username นี้มีผู้ใช้งานแล้ว' });
      }

      const user = new User({ username, password, role });
      await user.save();

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ message: 'ไม่สามารถลงทะเบียนได้', error: error.message });
    }
  },

  // เข้าสู่ระบบ
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // หาผู้ใช้จาก username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Username หรือ Password ไม่ถูกต้อง' });
      }

      // ตรวจสอบรหัสผ่าน
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Username หรือ Password ไม่ถูกต้อง' });
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.json({ user, token });
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: error.message });
    }
  },

  // ดึงข้อมูลผู้ใช้ปัจจุบัน
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: error.message });
    }
  }
};

module.exports = authController;