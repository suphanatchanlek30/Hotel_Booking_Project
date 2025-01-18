const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// ใช้ process.env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// เพิ่ม console.log เพื่อ debug
console.log('Cloudinary Config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'hotel_rooms',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 1000, height: 750, crop: 'fill' }]
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = { cloudinary, uploadCloud };