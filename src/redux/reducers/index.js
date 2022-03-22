import { combineReducers } from "redux";
import apodReducer from "./apod.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    apods: apodReducer,
});

export default rootReducer;
