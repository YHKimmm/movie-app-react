import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import isFav from "../utilities/isFav";
import isWatch from "../utilities/isWatch";
import { Link } from "react-router-dom";

function Favorite() {
    const favs = useSelector((state) => state.favs.items);

    const watchLists = useSelector((state) => state.watch.items);

    return (
        <main className={styles.wrapper}>
            <hr />
            <h3>Favorite Movies</h3>
            <section className={styles.container}>
                {favs.length < 1 ? (
                    <div className={styles.empty}>
                        <p>
                            Sorry you have no favourited movies. Return to the <Link to='/'>Home</Link> page to add a
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
