const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'max-lexicon';

async function main(firstName, lastName) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    
    const userCollection = db.collection('users');
    const addUser = await userCollection.insertOne({
        firstName,
        lastName
    });

    return addUser;
}

module.exports = main;
