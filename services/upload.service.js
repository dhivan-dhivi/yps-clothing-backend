const axios = require('axios');
const FormData = require('form-data');
const { imgbbApiKey } = require('../config/env');

async function uploadToImgBBService(fileBuffer) {
    const formData = new FormData();
    formData.append("image", fileBuffer.toString('base64'));
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
        headers: formData.getHeaders()
    });
    return response.data.data.url;
}
module.exports = { uploadToImgBBService };