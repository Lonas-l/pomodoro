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
    check("username", "The user's name cannot be empty.").notEmpty(),
    check("password", "Password should be more than 4 and less than 10 characters").isLength({min: 4, max: 10})
], controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["USER"]), controller.getUsers);
router.get("/checkUser", authMiddleware, checkAuthAndRole(["USER"]), controller.getUsers);
router.get("/verify-token", verifyToken, (req, res) => {
    res.json({message: "Access denied"});
});

router.put("/updateSettings", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const userSettings = req.body;

        const currentUser = await User.findById(userId);

        if (currentUser) {
            currentUser.settings = userSettings;
        }

        await currentUser.save();
        res.json({message: "Settings successfully updated"});

    } catch (error) {
        console.error("Error updating timer settings: ", error);
        res.status(500).json({message: "Error updating timer settings"});
    }
});

router.get("/getSettings", authMiddleware, async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        if (!currentUser) {
            return res.status(404).json({message: "User doesn't find"});
        }
        const settings = currentUser.settings;
        res.json(settings);
    } catch (error) {
        console.error("Error updating timer settings: ", error);
        res.status(500).json({message: "Error updating timer settings"});
    }
});

router.get("/getUser", authMiddleware, async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        if (!currentUser) {
            return res.status(404).json({message: "User doesn't find"});
        }
        res.json(currentUser);
    } catch (error) {
        console.error("Error updating timer settings:", error);
        res.status(500).json({message: "Error updating timer settings"});
    }
});


module.exports = router;
