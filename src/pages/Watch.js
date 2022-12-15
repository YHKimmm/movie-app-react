// Page Favs
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Watch() {
    // watch came from store.js
    const watchLater = useSelector((state) => state.watch.items);

    return (
        <main>
            <section>
                <h2>Watch Later Movie List</h2>
                {watchLater.length < 1 ? (
                    <p>
                        No movies yet in the Watch Later Movie List!
                    </p>
                ) : (
                    <div className={styles.movies}>
                        {watchLater.map((movie, i) => {
                            return (
                                <Movie key={i}
                                    movieObj={movie}
                                    isWatchList={true}
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
