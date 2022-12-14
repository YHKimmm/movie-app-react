import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Search from "../components/Search";
import Select from "../components/Select";
import styles from "./Home.module.css";
import { baseURL, searchURL, api_key } from "../globals/globalVariables";
import isFav from "../utilities/isFav";
import { useSelector } from "react-redux";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const categories = ["popular", "top rated", "now playing", "upcoming"];
    const [selectCategory, setSelectCategory] = useState(categories[0]);
    const [search, setSearch] = useState("");

    const favs = useSelector((state) => state.favs.items);
    console.log('favs ', favs);

    let url;

    const getMovies = async () => {
        switch (selectCategory) {
            case "popular":
                url = `${baseURL}/popular?${api_key}&language=en-US&page=1`;
                break;
            case "top rated":
                url = `${baseURL}/top_rated?${api_key}&language=en-US&page=1`;
                break;
            case "now playing":
                url = `${baseURL}/now_playing?${api_key}&language=en-US&page=1`;
                break;
            case "upcoming":
                url = `${baseURL}/upcoming?${api_key}&language=en-US&page=1`;
                break;
            default:
                console.log("unrecognized category");
        }
        const response = await fetch(url);
        const json = await response.json();
        let results = json.results.slice(0, 12);
        setMovies(results);
        setLoading(false);
    }


    const getSearchMovies = async () => {
        url = `${searchURL}?${api_key}&query=${search}`;
        const response = await fetch(url);
        const json = await response.json();
        let results = json.results.slice(0, 12);
        console.log('search ', results);
        setMovies(results);
        setLoading(false);
    }

    const searchMovies = (e) => {
        if (e.key === "Enter" && search) {
            getSearchMovies();
            setSearch("");
        } else {
            getMovies();
        }
    }

    useEffect(() => {
        getMovies();
        document.title = "Movie Application";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectCategory]);
    console.log(movies);

    const handleCategories = (e) => {
        setSelectCategory(e.target.value);
        console.log(selectCategory);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    return (
        <div>
            <Search search={search} onChange={handleSearch} onKeyDown={searchMovies} />
            <Select onChange={handleCategories} categories={categories} />
            <hr />
            <section className={styles.container}>
                {loading ? (<div className={styles.loader}>
                    <span>Loading...</span>
                </div>) : (
                    <div className={styles.movies}>
                        {movies.map((movie, i) => {
                            return (
                                <Movie key={i}
                                    movieObj={movie}
                                    isFav={isFav(favs, movie.id)}
                                />
                            )
                        })}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Home;