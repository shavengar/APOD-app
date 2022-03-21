import { Button, ImageListItem, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

const APODDisplay = ({
    apod,
    media,
    mediaType,
    copyright,
    title,
    date,
    info,
    isFavorite,
    addFavorite,
    removeFavorite,
    apod_id,
}) => {
    return (
        <ImageListItem>
            <img src={`${media}?w=248&fit=crop&auto=format`} alt={title} />
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
                        onClick={() => removeFavorite(apod_id)}
                    >
                        <FavoriteSharpIcon />
                    </IconButton>
                )}
            </div>
        </ImageListItem>
    );
};

export default APODDisplay;
