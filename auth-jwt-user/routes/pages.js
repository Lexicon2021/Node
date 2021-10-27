const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/batcave', (req, res) => {
    res.sendFile(path.resolve('public/batcave.html'));
});


module.exports = router;