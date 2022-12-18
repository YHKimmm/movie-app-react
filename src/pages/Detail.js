import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import { baseURL, api_key } from "../globals/globalVariables";
import isFav from "../utilities/isFav";
import isWatch from "../utilities/isWatch";
import { useSelector } from "react-redux";
import styles from './Detail.module.css';


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    console.log(id);

    const favs = useSelector((state) => state.favs.items);
    console.log('favourite lists ', favs);

    const watchLists = useSelector((state) => state.watch.items);
    console.log('watch lists', watchLists);

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
        <div className={styles.detail__wrapper}>
            {loading ? (<h1>Loading Page...</h1>) : (
                <DetailMovie
                    movieObj={movie}
                    isFav={isFav(favs, movie.id)}
                    isWatchList={isWatch(watchLists, movie.id)}
                />
            )}
        </div>
    );
}


export default Detail;