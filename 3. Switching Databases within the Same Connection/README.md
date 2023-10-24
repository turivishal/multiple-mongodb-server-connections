# Multiple MongoDB Connection in Single Application: Switching Databases within the Same Connection

Explore the implementation of multiple MongoDB connections in a Node.js application for robust and scalable database management.

Within your application's database setup, you can seamlessly switch between different databases using the `db.useDb()` method. This method enables you to create a new connection object associated with a specific database, all while sharing the same connection pool.

### 1. Clone the repo and move it to the project directory

### 2. Move to the Specific Directory:
```
cd "3. Switching Databases within the Same Connection"
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