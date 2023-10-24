require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");

// Primary Connection (Change the variable name as per your .env configuration!)
require("./db.primary.js")(process.env.PRIMARY_CONN_STR, {
    // (optional) connection options
});

// Import Product Schema
const productSchema = require("./product.schema.js")({
    collection: "products",
    // Pass configuration options if needed
});

// Create Model
const ProductModel = mongoose.model("Product", productSchema);

// Execute Your Operations Using ProductModel Object
(async function () {
    let product = await ProductModel.findOne();
    console.log(product);
})();

// 2. Setting Schema Flexibility:

// Secondary Connection (Change the variable name as per your .env configuration!)
const db = require("./db.secondary.js")(process.env.SECONDARY_CONN_STR, {
    // (optional) connection options
});

// Import Product Schema
const secondaryProductSchema = require("./product.schema.js")({
    collection: "products",
    strict: false
    // Pass configuration options if needed
});

// Create Model
const SecondaryProductModel = db.model("Product", secondaryProductSchema);

// Execute Your Operations Using SecondaryProductModel Object
(async function () {
    let product = await SecondaryProductModel.findOne();
    console.log(product);
})();

// CONNET SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});