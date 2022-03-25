import React, { useCallback } from "react";
import { connect } from "react-redux";
import APODDisplay from "./APODDisplay";
import { removeFavorite } from "../redux/actions";
import { Box, ImageList } from "@mui/material";
import useAPI from "../hooks/useAPI";

const SavedPage = ({ removeFavorite, favorites, user }) => {
    const { removeFav } = useAPI();
    const removeFromBackend = useCallback(
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
                <h1>Saved:</h1>
            </div>
            <div className="displayFlex justifyCenter">
                <Box sx={{ width: 1000, height: 700, overflowY: "scroll" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {favorites.map((apod) => (
                            <APODDisplay
                                key={apod.apod_id}
                                apod={apod}
                                removeFavorite={removeFromBackend}
                                isFavorite={true}
                            />
                        ))}
                    </ImageList>
                </Box>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.apods.favorites,
        user: state.user,
    };
};

const mapDispatchToProps = { removeFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(SavedPage);
