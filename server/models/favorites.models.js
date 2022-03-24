const query = require("../config/mysql.config");

const addFavorite = async (res, favorite) => {
    try {
        let { insertID } = await query("INSERT INTO favorites SET ?", [
            favorite,
        ]);
        return res.send({
            data: { ...favorite, id: insertID },
            success: true,
            error: null,
        });
    } catch (err) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong. Unable to add favorite from the database.",
        });
    }
};

const removeFavorite = async (res, id) => {
    try {
        await query("DELETE FROM favorites WHERE favorites.id = ?", [id]);
        return res.send({
            data: "Removed successfully.",
            success: true,
            error: null,
        });
    } catch (err) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong. Unable to remove favorite from the database.",
        });
    }
};

const getFavoritesByUserID = async (res, userID) => {
    try {
        const favorites = await query(
            "SELECT * FROM favorites WHERE favorites.user_id = ?"[userID]
        );
        return res.send({
            data: [favorites],
            success: true,
            error: null,
        });
    } catch (err) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong. Unable to retrieve favorites.",
        });
    }
};

module.exports = { addFavorite, removeFavorite, getFavoritesByUserID };
