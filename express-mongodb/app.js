const express = require('express');
const app = express();
const connection = require('./connection');
const PORT = process.env.PORT || 1337;



app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    const {firstName, lastName } = req.body;
    connection(firstName, lastName)
    .then(user => {
        console.log(user);
        res.json(user);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        
    })
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})