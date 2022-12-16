import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import { baseURL, api_key } from "../globals/globalVariables";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    console.log(id);
    const getMovie = async () => {
        const response = await fetch(`${baseURL}/${id}?${api_key}&language=en-US`);
        const json = await response.json();
        setMovie(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log('Detail ', movie);
    return (
        <div>
            {loading ? (<h1>Loading Page...</h1>) : (
                <DetailMovie
                    movieObj={movie}
                />
            )}
            <hr />
        </div>
    );
}


export default Detail;