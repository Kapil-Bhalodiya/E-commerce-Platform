const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');

const {userRouter} = require("./routes/user.routes")
const {categoryRouter} = require("./routes/categories.routes")
const {subCategoryRoutes} = require("./routes/subcategories.routes")
const {productRoutes} = require("./routes/products.routes")
const {productVariantRoutes} = require("./routes/productvariants.routes")
const {addressRoutes} = require("./routes/address.routes")
const {orderRoutes} = require("./routes/order.routes")
const {paymentRoutes} = require("./routes/payment.routes")

const app = express()

const allowedOrigins = process.env.CORS_ORIGIN.split(',');

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    // If the origin is in the allowedOrigins list or if it's undefined (for example, Postman)
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'), false);
    }
  },
  credentials: true,
}));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/user', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/product-variants', productVariantRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

module.exports = {app}