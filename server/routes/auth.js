const router = require('express').Router(); // THIS LINE IS MISSING
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// LOGIN ROUTE
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ message: 'Email not found' });

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send({ message: 'Invalid password' });

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send({ token: token, message: "Login Successful" });
    } catch (err) {
        res.status(400).send({ message: "Login Error" });
    }
});

// REGISTER ROUTE (Ensure this is also here)
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.send({ user: user._id, message: "Account Created!" });
    } catch (err) {
        res.status(400).send({ message: "Registration Failed" });
    }
});

module.exports = router;