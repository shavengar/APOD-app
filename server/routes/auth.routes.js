const express = require("express");
const router = express.Router();
const { signup, login } = require("../models/auth.models");
const validate = require("../middleware/validate.middleware");
const authenticate = require("../middleware/authentication.middleware");

router.get("/verify", authenticate, (req, res) => {
    return res.send({
        data: { username: req.user.username },
        success: true,
        error: null,
    });
});

router.put("/signup", validate, (req, res) => {
    signup(res, req.body.username, req.body.password);
});

router.post("/login", validate, (req, res) => {
    login(res, req.body.username, req.body.password);
});

router.get("/logout", (req, res) => {
    res.clearCookie("access_token");
    return res.send({
        data: null,
        success: true,
        error: null,
    });
});

module.exports = router;
