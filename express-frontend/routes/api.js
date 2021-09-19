const express = require('express');
const router = express.Router();
const faker = require('faker');

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



module.exports = router;