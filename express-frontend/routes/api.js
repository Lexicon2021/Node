const express = require('express');
const router = express.Router();
const faker = require('faker');
const axios = require('axios').default;

// /api 
router.get('/', (req, res) => {
    const names = [];
    for(let i = 0; i < 20; i++) {
        names.push(faker.name.firstName());
    }

    res.json(names);
});

router.get('/countries', (req, res) => {
    const countries = [];
    for(let i = 0; i < 20; i++) {
        countries.push(faker.address.country());
    }

    res.json(countries);
});

router.get('/posts', async (req, res) => {
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        const posts = await response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;