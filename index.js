//import
const express = require('express');
const dotenv = require('dotenv');
const connection = require('./utils/db')
const imageRouter = require('./routes/routes')

//config
const port = process.env.PORT || 5000;
dotenv.config();
connection();
console.log(process.env.DB_URL);


//init
const app = express();


//middlewares
app.use(express.json());
app.use(imageRouter);

//routes

//listen
app.listen(port, () => console.log(`server listening at ${port}`))