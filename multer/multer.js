const multer = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({ storage: Storage }).single('testImage')