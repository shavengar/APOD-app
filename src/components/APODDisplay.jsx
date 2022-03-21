import { Button, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

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
            {!isFavorite && (
                <Button variant="outlined" onClick={() => addFavorite(apod)}>
                    Save
                </Button>
            )}
            {isFavorite && (
                <Button
                    variant="contained"
                    onClick={() => removeFavorite(apod_id)}
                >
                    Remove Saved
                </Button>
            )}
        </ImageListItem>
    );
};

export default APODDisplay;
