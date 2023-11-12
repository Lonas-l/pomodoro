const jwt = require('jsonwebtoken');
const { secret } = require('./config'); // Здесь хранится секретный ключ для подписи токена

function verifyToken(req, res, next) {
    const token = req.headers.authorization; // Получаем токен из заголовка запроса

    if (!token) {
        return res.status(401).json({ message: 'Не предоставлен токен аутентификации' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Недействительный токен' });
        }

        // Токен действителен, и вы можете использовать информацию из decoded для аутентификации пользователя
        req.user = decoded; // Добавляем информацию о пользователе в объект запроса
        next(); // Продолжаем выполнение запроса
    });
}

module.exports = verifyToken;
