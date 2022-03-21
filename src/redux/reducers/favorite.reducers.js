import { ADD_FAVORITE, REMOVE_FAVORITE, SET_FAVORITES } from "../actions";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.apod];
        case REMOVE_FAVORITE:
            return state.filter((fav) => fav.apod_id !== action.apod_id);
        case SET_FAVORITES:
            return action.favorites;
        default:
            return state;
    }
};

export default favoriteReducer;
