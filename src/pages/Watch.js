// Page Favs
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import isFav from "../utilities/isFav";
import isWatch from "../utilities/isWatch";

function Watch() {
    // watch came from store.js
    const watchLists = useSelector((state) => state.watch.items);

    const favs = useSelector((state) => state.favs.items);

    return (
        <main>
            <section>
                <h2>Watch Later Movie List</h2>
                {watchLists.length < 1 ? (
                    <p>
                        No movies yet in the Watch Later Movie List!
                    </p>
                ) : (
                    <div className={styles.movies}>
                        {watchLists.map((movie, i) => {
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

export default Watch;
