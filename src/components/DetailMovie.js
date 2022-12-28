import PropTypes from "prop-types";
import styles from './DetailMovie.module.css';
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import FavButton from "./FavButton";
import WatchButton from "./WatchButton";
import { addWatchList, deleteWatchList } from "../features/watch/watchSlice";
import { useState } from "react";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function DetailMovie({ movieObj, isFav, isWatchList }) {
    const [imgSize, setImgSize] = useState(false);

    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj) {
        if (addToFav === true) {
            console.log(obj);
            dispatch(addFav(obj));
        } else {
            dispatch(deleteFav(obj));
        }
    }

    function handleWatchListClick(addToWatchList, obj) {
        if (addToWatchList === true) {
            console.log(obj);
            dispatch(addWatchList(obj));
        } else {
            dispatch(deleteWatchList(obj));
        }
    }


    function handleImgSize() {
        const imgHandle = document.querySelector('.posterImg');
        setImgSize(!imgSize);
        imgSize ? imgHandle.style.width = '280px' : imgHandle.style.width = '1200px';
    }



    return (
        <div className={`${styles.movie__bgPoster} ${styles.detail__movie}`} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300${movieObj.backdrop_path}")` }}>
            <div className={styles.movie__sPoster} onClick={handleImgSize}>
                {movieObj.poster_path === null ? (<img src={`${imageFolderPath}NoImagePlaceHolder.png`} alt="NoImagePlaceHolder" />)
                    : (<img src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`} className='posterImg' alt={movieObj.title} />)}
            </div>
            <section className={styles.movie__content}>
                <div className={styles.utilities}>
                    <h1>{movieObj.title}</h1>
                    <div className={styles.buttons}>
                        <div className={styles.fav__button}>
                            {isFav ? (
                                <FavButton
                                    movieObj={movieObj}
                                    remove={true}
                                    handleFavClick={handleFavClick}
                                />
                            ) : (
                                <FavButton
                                    movieObj={movieObj}
                                    handleFavClick={handleFavClick}
                                />
                            )}
                        </div>

                        <div className={styles.watch__button}>
                            {isWatchList ? (
                                <WatchButton
                                    movieObj={movieObj}
                                    remove={true}
                                    handleWatchClick={handleWatchListClick}
                                />
                            ) : (
                                <WatchButton
                                    movieObj={movieObj}
                                    handleWatchClick={handleWatchListClick}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.movie__information}>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>{movieObj.overview}</p>
                    </div>

                    <div className={styles.released}>
                        <h3>Released</h3>
                        <p>{movieObj.release_date}</p>
                    </div>

                    <div className={styles.rates}>
                        <h3>Rate</h3>
                        <p>{Math.floor(movieObj.vote_average * 10)}%</p>
                    </div>

                    <div className={styles.genre}>
                        <h3>Genre</h3>
                        <p>{(movieObj.genres.map(g => g.name).join(', '))}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

DetailMovie.prototype = {
    movieObj: PropTypes.object.isRequired
}


export default DetailMovie;