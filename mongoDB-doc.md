# Introduction to Mongoose for MongoDB :-

- Mongoose is an **Object Data Modeling (ODM)** library for MongoDB and Node.js.

- It manages relationships between data, provides schema validation, and is used
  to translate bw objects in code and the representation of those objects in MongoDB.

- Object Mapping bw Node and MongoDB managed via Mongoose.

- MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it,
  and the structure of these documents can vary as it is not enforced like SQL databases.

- This is one of the advantages of using NoSQL as it speeds up application development and reduces
  the complexity of deployments.

# Terminologies :-

- Collections :-

    Collections in Mongo are equivalent to **tables** in relational databases. They can hold multiple
    JSON documents.

- Documents :-

    Documents are equivalent to **records or rows** of data in SQL. While a SQL row can reference data
    in other tables, Mongo documents usually combine that in a document.

- Fields :-

    Fields, also known as **properties or attributes**, are similar to columns in a SQL table. In the image above, FirstName, LastName, Email, and Phone are all fields.

- Schema :-

    While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose schema is a **document data structure (or shape of the document)** that is enforced via the application layer.

- SchemaTypes :-

    While Mongoose schemas define the **overall structure or shape of a document**, SchemaTypes define the expected data type for individual fields (String, Number, Boolean, and so on).

    You can also pass in useful options like required to make a field non-optional, default to set a default value for the field, and many more.

- Models :-

    Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.


# Mongoose Schema vs. Model :-

A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.