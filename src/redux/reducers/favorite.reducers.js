import { ADD_FAVORITE, REMOVE_FAVORITE, SET_FAVORITES } from "../actions";

const initialState = {
    favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.apod],
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (fav) => fav.apod_id !== action.apod_id
                ),
            };
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.favorites,
            };
        default:
            return state;
    }
};

export default favoriteReducer;
