const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'abcd54321';

router.post('/login', (req, res) => {
    const creds = { // låtsas är från en databas...
        username: 'max',
        password: '1234'
    };

    // kolla om det request är likadant som från "databasen" (creds)
    if (req.body.username === creds.username && req.body.password === creds.password) {
        res.status(200).json({status: 'success', token: jwt.sign({name: 'Max', favColor: 'Green'}, secret), redirect: 'admin'});
    } else {
        res.status(403).json({ status: 'failure' });
    }
});


module.exports = router;