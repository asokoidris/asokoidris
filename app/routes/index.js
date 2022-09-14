const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const multer = require ('multer')


const userRoute = require('../routes/users');
const authRoute = require('../routes/auth');
const cartRoute = require('../routes/cart');
const orderRoute = require('../routes/order');
const productRoute = require('../routes/product')


app.use(morgan("dev"));
// app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/product', productRoute);




module.exports = app;