const express = require('express');
const { fetchAllDetails, uploadImage, updateDetails, findImage, findByIdAndRemove } = require('../controller/actions');

const Router = express.Router();

Router.get('/', (req, res) => res.send("let starts"))
Router.get('/getAllDetails', fetchAllDetails);
Router.get('/findImage/:id', findImage)
Router.post('/upload', uploadImage)
Router.put('/updateDetails/:id', updateDetails)
Router.delete('/findByIdAndRemove/:id', findByIdAndRemove)
// Router.delete('/deleteMany', deleteMany)

module.exports = Router;