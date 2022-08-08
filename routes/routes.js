const express = require('express');
const { fetchAllDetails, uploadImage, updateDetails, findImage } = require('../controller/actions');

const Router = express.Router();

Router.get('/getAllDetails', fetchAllDetails);
Router.get('/findImage', findImage)
Router.post('/upload', uploadImage)
Router.put('/updateDetails/:id', updateDetails)


module.exports = Router;