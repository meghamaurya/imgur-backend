//import
const express = require('express');
const dotenv = require('dotenv');
const connection = require('./utils/db')
const path = require('path');
const multer = require('multer');
const imageRouter = require('./routes/routes')
const ImageModel = require('./models/image.models');

//config
const port = process.env.PORT || 8000;
dotenv.config();
connection();
console.log(process.env.DB_URL);


//init
const app = express();


//middlewares
app.use(express.json());
app.use(imageRouter);
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

//routes
app.get('/', (req, res) => {
    res.send("let starts");
})

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

// app.get('/user/:name', (req, res) => {
//     console.log(req.params);
//     res.send(`the user name: ${req.params.name}`)
// })

// app.get('/student', (req, res) => {
//     console.log(req.query);
//     const { name, age } = req.query;
//     res.send(`Student name is ${name}, age: ${age}`)
// })

// app.post('/saveDetail', (req, res) => {
//     console.log(req.body)
//     res.send("response");
// })

//listen
app.listen(port, () => console.log(`server listening at ${port}`))