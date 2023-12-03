const jwt = require('jsonwebtoken');
const {secret} = require('../config');

module.exports = (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'User is not authorize' });
            }
            const decoded = jwt.verify(token, secret);
            if (roles && !roles.some(role => decoded.roles.includes(role))) {
                return res.status(403).json({ message: 'You don\'t have access' });
            }
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).json({ message: 'User is not authorize' });
        }
    };
};
