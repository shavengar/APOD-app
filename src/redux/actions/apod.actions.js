export const ADD_FAVORITE = "Add Favorite";
export const REMOVE_FAVORITE = "Remove Favorite";
export const SET_FAVORITES = "Set Favorites";
export const SET_APODS = "Set APODS";
export const CLEAR_APODS = "Clear APODS";

export const addFavorite = (apod) => {
    return { type: ADD_FAVORITE, apod };
};

export const removeFavorite = (apod_id) => {
    return { type: REMOVE_FAVORITE, apod_id };
};

export const setFavorites = (favorites) => {
    return { type: SET_FAVORITES, favorites };
};

export const setAPODS = (results) => {
    return { type: SET_APODS, results };
};

export const clearAPODS = () => {
    return { type: CLEAR_APODS };
};
