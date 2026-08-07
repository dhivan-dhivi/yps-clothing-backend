const router = require('express').Router();
const multer = require('multer');
const upload = multer();
const { uploadImageController } = require('../controllers/upload.controller');
router.post('/', upload.single('image'), uploadImageController);
module.exports = router;