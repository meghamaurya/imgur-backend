
const ImageModel = require('../models/image.models');
// const { upload } = require('../multer/multer');

exports.uploadImage = async (req, res) => {
    try {
        const newImage = new ImageModel({
            username: req.body.username,
            image: req.body.image,
            detail: req.body.detail,
            contentType: req.body.contentType
        })
        newImage.save()
            .then(() => console.log("Successfully Uploaded"))
            .catch((err) => console.log(err));
        res.send("Image Uploaded")

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.findImage = async (req, res) => {
    try {
        const findimage = await ImageModel.findById(req.params.id);
        console.log(findimage);
        res.send(findimage);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.fetchAllDetails = async (req, res) => {
    try {
        var image = await ImageModel.find().then(data => res.send(data));
        console.log(image);
        // res.json(image);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.updateDetails = async (req, res) => {
    try {
        const id = req.params.id
        const imageDetail = await ImageModel.findByIdAndUpdate(id, req.body, { new: true });
        console.log(`response ${imageDetail}`)
        res.json(imageDetail);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.findByIdAndRemove = async (req, res) => {
    try {
        const id = req.params.id
        const imageDetail = await ImageModel.findByIdAndRemove(id);
        console.log(`response ${imageDetail}`)
        res.json(imageDetail);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
// exports.deleteMany = async (req, res) => {
//     try {
//         const imageDetail = await ImageModel.deleteMany(req.params.id);
//         console.log(`response ${imageDetail}`)
//         res.json(imageDetail);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Internal server error");
//     }
// }