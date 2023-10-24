# Multiple MongoDB Connection in Single Application

Explore the implementation of multiple MongoDB connections in a Node.js application for robust and scalable database management.

We explore different scenarios and examples to help you choose the setup that best aligns with your specific data access and management needs:

**1. Using the Existing Schema**: You can choose to use the same schema that was employed in the primary connection. This is suitable for scenarios where both connections will operate on the same data model. 

**2. Setting Schema Flexibility**: If you prefer to have schema flexibility, you can pass the `strict: false` property in the options when configuring your schema for the secondary connection. This allows you to work with data that doesn't adhere strictly to the schema.

**3. Switching Databases within the Same Connection**: Within your application's database setup, you can seamlessly switch between different databases using the `db.useDb()` method. This method enables you to create a new connection object associated with a specific database, all while sharing the same connection pool.

### 1. Clone the repo and move it to the project directory

### 2. Move to the Specific Directory:
```
cd "1. Using the Existing Schema"
// or
cd "2. Setting Schema Flexibility"
// or 
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