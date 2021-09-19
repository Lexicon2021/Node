const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/admin', (req, res) => {
    res.sendFile(path.resolve('public/admin.html'));
});


module.exports = router;