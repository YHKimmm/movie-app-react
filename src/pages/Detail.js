import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    console.log(id);
    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8510ce99b1c1d168b91ddf40e467565a&language=en-US`);
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
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    rate={movie.vote_average}
                    genres={movie.genres}

                />
            )}
        </div>
    );
}


export default Detail;