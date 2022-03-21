export const ADD_FAVORITE = "Add Favorite";
export const REMOVE_FAVORITE = "Remove Favorite";
export const SET_FAVORITES = "Set Favorites";

export const addFavorite = (apod) => {
    return { type: ADD_FAVORITE, apod };
};

export const removeFavorite = (apod_id) => {
    return { type: REMOVE_FAVORITE, apod_id };
};

export const setFavorites = (favorites) => {
    return { type: SET_FAVORITES, favorites };
};
