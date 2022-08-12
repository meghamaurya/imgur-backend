const multer = require('multer');

//storage
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalName));
    }
});

const upload = multer({
    storage: Storage
}).single("testImage")

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            const newImage = new ImageModel({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
                .then(() => res.send("successfully uploaded"))
                .catch((err) => console.log(err))
        }
    })
})