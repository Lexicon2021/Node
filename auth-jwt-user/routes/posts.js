const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    // res.json({posts: {title: 'First Post', details: 'My first Post'}});
    res.send(req.user); // signed in user.    
});

module.exports = router;