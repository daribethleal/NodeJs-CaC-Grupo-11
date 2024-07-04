const express = require ("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");
const AuthMiddlewares = require("../middlewares/authMiddlewares");

router.post("/login", controller.login);
router.post("/register", controller.register);

router.post("/protected", AuthMiddlewares, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;