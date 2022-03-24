const express = require("express");
const router = express.Router();
const {
    addFavorite,
    removeFavorite,
    getFavoritesByUserID,
} = require("../models/favorites.models");

router.put("/add", (req, res) => {
    const {
        apod_id,
        apod_title,
        apod_date,
        apod_copyright,
        apod_info,
        apod_url,
        media_type,
    } = req.body;
    if (
        !apod_id ||
        !apod_title ||
        !apod_date ||
        !apod_copyright ||
        !apod_info ||
        !apod_url ||
        !media_type
    ) {
        return res.send({
            data: null,
            success: false,
            error: "Invalid data provided.",
        });
    }
    const apod = {
        user_id: req.user.id,
        apod_id,
        apod_title,
        apod_date,
        apod_copyright,
        apod_info,
        apod_url,
        media_type,
    };
    addFavorite(res, apod);
});

router.delete("/remove/:id", (req, res) => {
    removeFavorite(res, req.params.id, req.user.id);
});

router.get("/", (req, res) => {
    getFavoritesByUserID(res, req.user.id);
});

module.exports = router;
