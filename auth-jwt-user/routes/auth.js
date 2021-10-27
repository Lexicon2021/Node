const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {

    // Validate User
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    // if existing user
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
        return res.status(400).json({error: 'Email exists'});
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPssword = await bcrypt.hash(req.body.password, salt);

    // Create new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPssword
    });

    try {
        const savedUser = await user.save();
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.json({ user: user._id, redirect: 'batcave', token });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {

    // Validate User
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    // if existing email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({error: 'Email is not found'});
    }

    // Password correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({error: 'Invalid password'});
    }

    // Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({token: token, redirect: 'batcave'});

});





module.exports = router;