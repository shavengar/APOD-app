import React, { useCallback } from "react";
const axios = require("axios");

const useAPI = () => {
    const makeAPICall = useCallback(async (config) => {
        try {
            const res = await axios(config);
            return res;
        } catch (err) {
            return {
                data: {
                    data: null,
                    success: false,
                    error: "Something went wrong.",
                },
            };
        }
    }, []);

    const signup = useCallback(
        async (username, password) => {
            return await makeAPICall({
                url: "/api/users/signup",
                method: "put",
                data: { username, password },
            });
        },
        [makeAPICall]
    );

    const login = useCallback(
        async (username, password) => {
            return await makeAPICall({
                url: "/api/users/login",
                method: "post",
                data: { username, password },
            });
        },
        [makeAPICall]
    );

    const addFav = useCallback(
        async (apod) => {
            return await makeAPICall({
                url: "/api/favorites/add",
                method: "put",
                data: apod,
            });
        },
        [makeAPICall]
    );

    const removeFav = useCallback(
        async (apod_id) => {
            return await makeAPICall({
                url: `/api/favorites/remove/${apod_id}`,
                method: "delete",
            });
        },
        [makeAPICall]
    );

    const getFavesByUser = useCallback(async () => {
        return await makeAPICall({
            url: `api/favorites/`,
            method: "get",
        });
    }, [makeAPICall]);

    const logout = useCallback(async () => {
        return await makeAPICall({
            url: "api/users/logout",
            method: "get",
        });
    }, [makeAPICall]);

    const verify = useCallback(async () => {
        return await makeAPICall({
            url: "api/users/verify",
            method: "get",
        });
    }, [makeAPICall]);

    return { signup, login, addFav, removeFav, getFavesByUser, logout, verify };
};

export default useAPI;
