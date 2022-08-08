const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, {
    timeStamps: true
})

module.exports = ImageModel = mongoose.model("Image", imageSchema);