const SET_USER = "Set User";
const CLEAR_USER = "Set User";

export const setUser = (username) => {
    return { type: SET_USER, username };
};

export const clearUser = () => {
    return { type: CLEAR_USER };
};
