import { Button, ImageListItem, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

const APODDisplay = ({ apod, isFavorite, addFavorite, removeFavorite }) => {
    return (
        <ImageListItem>
            {apod.media_type === "image" && (
                <img
                    src={`${apod.apod_url}?w=248&fit=crop&auto=format`}
                    alt={apod.apod_title}
                />
            )}
            {apod.media_type === "video" && (
                <iframe src={apod.apod_url} width="100%"></iframe>
            )}
            <div className="displayFlex justifyCenter">
                {!isFavorite && (
                    <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() => addFavorite(apod)}
                    >
                        <FavoriteBorderSharpIcon />
                    </IconButton>
                )}
                {isFavorite && (
                    <IconButton
                        variant="contained"
                        color="primary"
                        onClick={() => removeFavorite(apod.apod_id)}
                    >
                        <FavoriteSharpIcon />
                    </IconButton>
                )}
            </div>
        </ImageListItem>
    );
};

export default APODDisplay;
