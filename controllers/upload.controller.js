const { uploadToImgBBService } = require('../services/upload.service');
async function uploadImageController(req, res) {
    try {
        if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });
        const url = await uploadToImgBBService(req.file.buffer);
        res.json({ success: true, url });
    } catch (e) { res.status(500).json({ success: false, message: e.message }); }
}
module.exports = { uploadImageController };