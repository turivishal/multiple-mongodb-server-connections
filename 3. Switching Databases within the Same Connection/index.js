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

// 3. Switching Databases within the Same Connection:

// Secondary Connection (Change the variable name as per your .env configuration!)
const db = require("./db.secondary.js")(process.env.SECONDARY_CONN_STR, {
    // (optional) connection options
});

// Import Product Schema
const secondaryProductSchema = require("./product.schema.js")({
    collection: "products",
    // strict: false // that doesn't adhere strictly to the schema!
    // Pass configuration options if needed
});

// Function to get connection object for particular store's database
function getStoreConnection(storeId) {
    return db.useDb("Store"+storeId, { useCache: true });
}

// Create a connection for 'Store A'
const store = getStoreConnection("A");

// Create Model
const SecondaryStoreProductModel = store.model("Product", secondaryProductSchema);

// Execute Your Operations Using SecondaryStoreProductModel Object
(async function () {
    let product = await SecondaryStoreProductModel.findOne();
    console.log(product);
})();

// // Create a connection for 'Store B'
// const storeB = getStoreConnection("B");

// // Create Model
// const SecondaryStoreBProductModel = storeB.model("Product", secondaryProductSchema);

// // Execute Your Operations Using SecondaryStoreBProductModel Object
// (async function () {
//     let product = await SecondaryStoreBProductModel.findOne();
//     console.log(product);
// })();

// CONNET SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});