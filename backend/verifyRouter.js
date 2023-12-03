const Router = require('express')
const router = new Router()
const verifyToken = require('./verifyToken');

router.get('/verify-token', verifyToken, (req, res) => {
    res.json({ message: 'Access allow' });
});

module.exports = router
