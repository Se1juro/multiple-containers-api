require('dotenv').config()
const express = require('express');
const morgan = require("morgan")

// Constants
const PORT = process.env.PORT;

// App
const app = express();

const productRoutes = require('./routes/products.routes')

app.use(morgan("dev"))

app.use(productRoutes)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});