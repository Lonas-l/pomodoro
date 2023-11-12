const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function (req, res, next) {
    console.log('qwewqeqwe');
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.header('Authorization');

        if (!token) {
            console.log('!token')
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        next()
    } catch (e) {
        console.log('123 = ', e)
        return res.status(403).json({message: "Пользователь не авторизован"})
    }
};
