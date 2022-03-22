import { Box, ImageList, CircularProgress } from "@mui/material";
import React, { useMemo } from "react";
import { connect } from "react-redux";
import useAPOD from "../hooks/useAPOD";
import APODDisplay from "./APODDisplay";
import { addFavorite, removeFavorite } from "../redux/actions";

const APODPage = ({ addFavorite, removeFavorite, favorites, user }) => {
    const { data, error, loading } = useAPOD(user);
    const favIds = useMemo(
        () => favorites.map((fav) => fav.apod_id),
        [favorites]
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
                            {data.map((apod) => (
                                <APODDisplay
                                    key={apod.apod_id}
                                    apod={apod}
                                    isFavorite={favIds.includes(apod.apod_id)}
                                    addFavorite={addFavorite}
                                    removeFavorite={removeFavorite}
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
    return { favorites: state.favorites, user: state.user };
};

const mapDispatchToProps = {
    addFavorite,
    removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(APODPage);
