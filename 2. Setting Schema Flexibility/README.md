# Multiple MongoDB Connection in Single Application: Setting Schema Flexibility

Explore the implementation of multiple MongoDB connections in a Node.js application for robust and scalable database management.

If you prefer to have schema flexibility, you can pass the `strict: false` property in the options when configuring your schema for the secondary connection. This allows you to work with data that doesn't adhere strictly to the schema.

### 1. Clone the repo and move it to the project directory

### 2. Move to the Specific Directory:
```
cd "2. Setting Schema Flexibility"
```

### 3. Setup MongoDB Connection Strings in .env file:
```
PRIMARY_CONN_STR="mongodb://127.0.0.1/Store"
SECONDARY_CONN_STR="mongodb://127.0.0.1/Store"
```

### 4. Insert Sample Data in `Store.products` Database.Collection:
```
> use Store
> db.products.insertMany([{
  "_id": { "$oid": "6537adc45b4f0d3e8a0983a0" },
  "store": {
    "_id": { "$oid": "5f71ab6f9b32d94b0c4ef850" },
    "name": "Store A"
  },
  "name": "Product 1"
},{
  "_id": { "$oid": "6537ade15b4f0d3e8a0983a1" },
  "store": {
    "_id": { "$oid": "5f71ab6f9b32d94b0c4ef851" },
    "name": "Store B"
  },
  "name": "Product 2"
}]);
```

### 5. Install Dependencies:
```
npm install
```

### 6. Run:
```
node index.js
```

### 7. Output in Console: 
```
Listening on port 3000...
MongoDB primary connection succeeded!
MongoDB primary connection opened!
MongoDB secondary connection succeeded!
MongoDB secondary connection opened!
{
  store: { _id: new ObjectId("5f71ab6f9b32d94b0c4ef850"), name: 'Store A' },
  _id: new ObjectId("6537adc45b4f0d3e8a0983a0"),
  name: 'Product 1'
}
{
  store: { _id: new ObjectId("5f71ab6f9b32d94b0c4ef850"), name: 'Store A' },
  _id: new ObjectId("6537adc45b4f0d3e8a0983a0"),
  name: 'Product 1'
}
```