const Booking = require('../models/Booking');
const Room = require('../models/Room');

const bookingController = {
  // สร้างการจองใหม่
  createBooking: async (req, res) => {
    try {
      const { roomId, checkIn, checkOut, guestName, email, phone } = req.body;

      // ตรวจสอบว่ามีห้องว่างในช่วงเวลาที่ต้องการไหม
      const existingBooking = await Booking.findOne({
        roomId,
        $or: [
          {
            checkIn: { $lte: checkOut },
            checkOut: { $gte: checkIn }
          }
        ],
        status: 'confirmed'
      });

      if (existingBooking) {
        return res.status(400).json({ message: 'ห้องพักไม่ว่างในช่วงเวลาที่เลือก' });
      }

      // หาราคาห้องพัก
      const room = await Room.findById(roomId);
      if (!room) {
        return res.status(404).json({ message: 'ไม่พบห้องพัก' });
      }

      // คำนวณจำนวนวันและราคารวม
      const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
      const totalPrice = days * room.price;

      const booking = new Booking({
        roomId,
        checkIn,
        checkOut,
        guestName,
        email,
        phone,
        totalPrice
      });

      await booking.save();
      res.status(201).json(booking);
    } catch (error) {
      res.status(400).json({ message: 'ไม่สามารถสร้างการจองได้', error: error.message });
    }
  },

  // ดึงการจองทั้งหมด
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find().populate('roomId');
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: error.message });
    }
  },

  // อัพเดทสถานะการจอง
  updateBookingStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      if (!booking) {
        return res.status(404).json({ message: 'ไม่พบการจอง' });
      }
      res.json(booking);
    } catch (error) {
      res.status(400).json({ message: 'ไม่สามารถอัพเดทสถานะได้', error: error.message });
    }
  }
};

module.exports = bookingController;