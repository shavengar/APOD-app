const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authentication.middleware");
const {
    addFavorite,
    removeFavorite,
    getFavoritesByUserID,
} = require("../models/favorites.models");

router.put("/add", authenticate, (req, res) => {
    const { apod_id, title, date, copyright, info, url, media_type } = req.body;
    if (!apod_id || !title || !date || !info || !url || !media_type) {
        return res.send({
            data: null,
            success: false,
            error: "Invalid data provided.",
        });
    }
    const apod = {
        user_id: req.user.id,
        apod_id,
        title,
        date,
        copyright,
        info,
        url,
        media_type,
    };
    addFavorite(res, apod);
});

router.delete("/remove/:id/", authenticate, (req, res) => {
    removeFavorite(res, req.params.id, req.user.id);
});

router.get("/", authenticate, (req, res) => {
    getFavoritesByUserID(res, req.user.id);
});

module.exports = router;
