import { Box, ImageList, CircularProgress } from "@mui/material";
import React, { useMemo, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import useAPOD from "../hooks/useAPOD";
import APODDisplay from "./APODDisplay";
import { addFavorite, removeFavorite, setAPODS } from "../redux/actions";
import useAPI from "../hooks/useAPI";

const APODPage = ({
    addFavorite,
    removeFavorite,
    setAPODS,
    results,
    favorites,
    user,
}) => {
    const { data, error, loading } = useAPOD(user);
    const { addFav, removeFav } = useAPI();
    /*
     * creates new array of the favorites' apod ids
     * compares if result's id matches the favorite's id
     * boolean then used to show favorite button or add favorite button
     */
    const favIds = useMemo(
        () => favorites.map((fav) => fav.apod_id),
        [favorites]
    );
    useEffect(() => {
        if (data) {
            setAPODS(data);
        }
    }, [data]);

    const addFavToBackend = useCallback(
        async (apod) => {
            const res = await addFav({ ...apod });
            if (res.data.success) {
                addFavorite(res.data.data);
            }
        },
        [addFavorite, addFav]
    );

    const removeFavFromBackend = useCallback(
        async (apod_id) => {
            const res = await removeFav(apod_id);
            if (res.data.success) {
                removeFavorite(apod_id);
            }
        },
        [removeFavorite, removeFav]
    );

    return (
        <section>
            <div className="displayFlex justifyCenter">
                <h1>2022 NASA Astronomy Photos of the Day:</h1>
            </div>
            {loading && (
                <div className="displayFlex justifyCenter loading">
                    <CircularProgress />
                </div>
            )}
            {error && <div>Something went wrong.</div>}
            {!error && !loading && (
                <div className="displayFlex justifyCenter">
                    <Box sx={{ width: 1000, height: 700, overflowY: "scroll" }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {results.map((apod) => (
                                <APODDisplay
                                    key={apod.apod_id}
                                    apod={apod}
                                    isFavorite={favIds.includes(apod.apod_id)}
                                    addFavorite={addFavToBackend}
                                    removeFavorite={removeFavFromBackend}
                                />
                            ))}
                        </ImageList>
                    </Box>
                </div>
            )}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.apods.favorites,
        results: state.apods.results,
        user: state.user,
    };
};

const mapDispatchToProps = {
    addFavorite,
    removeFavorite,
    setAPODS,
};

export default connect(mapStateToProps, mapDispatchToProps)(APODPage);
