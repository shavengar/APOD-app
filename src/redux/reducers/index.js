import { combineReducers } from "redux";
import favoriteReducer from "./favorite.reducers";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    favorites: favoriteReducer,
});

export default rootReducer;
