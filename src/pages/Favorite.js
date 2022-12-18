// Page Favs
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import isFav from "../utilities/isFav";
import isWatch from "../utilities/isWatch";

function Favorite() {
    const favs = useSelector((state) => state.favs.items);

    const watchLists = useSelector((state) => state.watch.items);

    return (
        <main>
            <h2 style={{ 'paddingLeft': '20px' }}>Favorite Movies</h2>
            <section className={styles.container}>
                {favs.length < 1 ? (
                    <div className={styles.empty}>
                        <p>
                            Sorry you have no favourited movies. Return to the home page to add a
                            favourite movie
                        </p>

                    </div>
                ) : (
                    <div className={`${styles.movies} ${styles.favorite__movie}`}>
                        {favs.map((movie, i) => {
                            return (
                                <Movie key={i}
                                    movieObj={movie}
                                    isFav={isFav(favs, movie.id)}
                                    isWatchList={isWatch(watchLists, movie.id)}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Favorite;
