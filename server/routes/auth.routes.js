const express = require("express");
const router = express.Router();
const { signup, login } = require("../models/auth.models");

router.put("/signup", (req, res) => {
    signup(res, req.body.username, req.body, password);
});

router.post("/login", (req, res) => {
    login(res, req.body.username, req.body.password);
});

router.get("/logout", (req, res) => {
    return res.send({
        data: null,
        success: true,
        error: null,
    });
});

module.exports = router;
