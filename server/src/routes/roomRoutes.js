const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { auth, adminAuth } = require('../middlewares/auth');

// Public routes
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);

// Admin only routes
router.post('/', auth, adminAuth, roomController.createRoom);
router.put('/:id', auth, adminAuth, roomController.updateRoom);
router.delete('/:id', auth, adminAuth, roomController.deleteRoom);

module.exports = router;