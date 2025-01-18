const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { auth, adminAuth } = require('../middlewares/auth');

// Public routes
router.post('/', bookingController.createBooking);

// Admin routes
router.get('/', auth, adminAuth, bookingController.getAllBookings);
router.put('/:id/status', auth, adminAuth, bookingController.updateBookingStatus);

module.exports = router;