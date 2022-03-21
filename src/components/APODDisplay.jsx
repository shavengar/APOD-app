import { ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

const APODDisplay = ({ media, mediaType, copyright, title, date, info }) => {
    return (
        <ImageListItem>
            <img src={`${media}?w=248&fit=crop&auto=format`} alt={title} />
            <ImageListItemBar
                title={title}
                subtitle={`Credit & Copyright: ${copyright}`}
            />
        </ImageListItem>
    );
};

export default APODDisplay;
