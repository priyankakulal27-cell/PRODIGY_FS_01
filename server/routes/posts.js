const router = require('express').Router();
const verify = require('./verifyToken'); // Import our security guard

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'My Secret Post',
            description: 'Only logged-in users can see this!'
        }
    });
});

module.exports = router;