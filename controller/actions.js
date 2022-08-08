
const ImageModel = require('../models/image.models');
// const { upload } = require('../multer/multer');
// const multer = require('multer');

exports.fetchAllDetails = async (req, res) => {
    try {
        const image = await ImageModel.find();
        console.log(image);
        res.json(image);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.findImage = async (req, res) => {
    try {
        const findimg = await ImageModel.findById(req.params.id).exec();
        console.log(findimg);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.uploadImage = async (req, res) => {
    try {
        const newImage = new ImageModel({
            name: req.body.name,
            image: {
                data: req.file.upload,
                contentType: 'image/png'
            }
        })
        newImage.save()
            .then(() => console.log("Successfully Uploaded"))
            .catch((err) => console.log(err));

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.updateDetails = async (req, res) => {
    try {
        const imageDetail = await ImageModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        console.log(`response ${imageDetail}`)
        // res.json(imageDetail);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}