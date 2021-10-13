const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'max-lexicon';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose Connected'));

    return 'done.';
}

module.exports = main;
