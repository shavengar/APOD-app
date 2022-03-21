import { Box, ImageList } from "@mui/material";
import React from "react";
import useAPOD from "../hooks/useAPOD";
import APODDisplay from "./APODDisplay";

const APODPage = () => {
    const { data, error, loading } = useAPOD();
    return (
        <section>
            <h1>NASA's Astronomy Photos of the Day:</h1>
            <h4>Below are the photos since the start of 2022.</h4>
            {loading && <div>Loading</div>}
            {error && <div>Something went wrong.</div>}
            {!error && !loading && (
                <div className="displayFlex justifyCenter">
                    <Box sx={{ width: 1000, height: 700, overflowY: "scroll" }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {data.map((apod) => (
                                <APODDisplay
                                    key={apod.apod_id}
                                    media={apod.apod_url}
                                    mediaType={apod.media_type}
                                    copyright={apod.apod_copyright}
                                    title={apod.apod_title}
                                    date={apod.apod_date}
                                    info={apod.apod_info}
                                />
                            ))}
                        </ImageList>
                    </Box>
                </div>
            )}
        </section>
    );
};

export default APODPage;
