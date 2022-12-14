// Page Favs
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Favorite() {
    const favs = useSelector((state) => state.favs.items);

    return (
        <main>
            <section>
                <h2>Favorite Characters</h2>
                {favs.length < 1 ? (
                    <p>
                        No favorite characters. Return to the <Link to="/">home</Link> page
                        to add some favorite characters.
                    </p>
                ) : (
                    <div className={styles.movies}>
                        {favs.map((movie, i) => {
                            return (
                                <Movie key={i}
                                    movieObj={movie}
                                    isFav={true}
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
