import { ImageListItem, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

const APODDisplay = ({ apod, isFavorite, addFavorite, removeFavorite }) => {
    return (
        <ImageListItem>
            {apod.media_type === "image" && (
                <img
                    src={`${apod.url}?w=248&fit=crop&auto=format`}
                    alt={apod.title}
                />
            )}
            {apod.media_type === "video" && (
                <iframe src={apod.url} title={apod.title} width="100%"></iframe>
            )}
            <div className="displayFlex justifyCenter">
                <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (isFavorite) {
                            removeFavorite(apod.apod_id);
                        } else {
                            addFavorite(apod);
                        }
                    }}
                >
                    {isFavorite ? (
                        <FavoriteSharpIcon />
                    ) : (
                        <FavoriteBorderSharpIcon />
                    )}
                </IconButton>
            </div>
        </ImageListItem>
    );
};

export default APODDisplay;
