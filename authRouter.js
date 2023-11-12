const Router = require("express");
const router = new Router();
const controller = require("./authController");
const {check} = require("express-validator");
const authMiddleware = require("./middlewaree/authMiddleware");
const roleMiddleware = require("./middlewaree/roleMiddleware");
const checkAuthAndRole = require("./middlewaree/checkAuthAndRole");
const verifyToken = require("./verifyToken");
const User = require("./models/User");

router.post("/registration", [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 4 и меньше 10 символов").isLength({min: 4, max: 10})
], controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["USER"]), controller.getUsers);
router.get("/checkUser", authMiddleware, checkAuthAndRole(["USER"]), controller.getUsers);
router.get("/verify-token", verifyToken, (req, res) => {
    // Выполняйте действия, доступные только для аутентифицированных пользователей
    res.json({message: "Доступ разрешен"});
});

router.put("/updateSettings", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id; // Получите идентификатор пользователя из decodedData
        const userSettings = req.body;

        // Получите текущего пользователя из базы данных по идентификатору
        const currentUser = await User.findById(userId);

        if (currentUser) {
            currentUser.settings = userSettings;
        }

        await currentUser.save();

        console.log("currentUser = ", currentUser);

        res.json({message: "Settings successfully updated"});

    } catch (error) {
        console.error("Ошибка при обновлении настроек таймера:", error);
        res.status(500).json({message: "123Ошибка при обновлении настроек таймера"});
    }
});

router.get("/getSettings", authMiddleware, async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        if (!currentUser) {
            return res.status(404).json({message: "Пользователь не найден"});
        }
        console.log('qwe === ', currentUser)
        const settings = currentUser.settings
        res.json(settings);
    } catch (error) {
        console.error("Ошибка при получении настроек таймера:", error);
        res.status(500).json({message: "Ошибка при получении настроек таймера"});
    }
});

router.get("/getUser", authMiddleware, async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        if (!currentUser) {
            return res.status(404).json({message: "Пользователь не найден"});
        }
        res.json(currentUser);
    } catch (error) {
        console.error("Ошибка при получении настроек таймера:", error);
        res.status(500).json({message: "Ошибка при получении настроек таймера"});
    }
});


module.exports = router;
