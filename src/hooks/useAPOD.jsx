import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL =
    "https://api.nasa.gov/planetary/apod?api_key=RROYlTO9r3RaaFal3W7ZidAlk20Z8LaBiHaRDOs7&start_date=2022-01-01";

/**
 * asynchronously calls APOD api using axios
 * --! note that there are some videos, will have to handle differently
 * @throws error if unable to return api response
 * @returns copyright, date (using for id since unique), explanation, media type, title, and url
 */

const useAPOD = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            setData(null);
            setError(null);
            try {
                const res = await axios.get(baseURL);
                const apods = res.data.map((apod) => ({
                    apod: apod,
                    apod_copyright: apod.copyright,
                    apod_id: apod.date,
                    apod_date: apod.date,
                    apod_info: apod.explanation,
                    media_type: apod.media_type,
                    apod_title: apod.title,
                    apod_url: apod.url,
                }));
                setData(apods);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);
    return { data, error, loading };
};

export default useAPOD;
