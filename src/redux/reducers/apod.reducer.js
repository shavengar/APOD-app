import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SET_FAVORITES,
    SET_APODS,
    CLEAR_APODS,
} from "../actions";

const initialState = {
    results: [],
    favorites: [],
};

const apodReducer = (state = initialState, action) => {
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
            return { ...state, favorites: action.favorites };
        case SET_APODS:
            return { ...state, results: action.results };
        case CLEAR_APODS:
            return { ...state, results: [], favorites: [] };
        default:
            return state;
    }
};

export default apodReducer;
