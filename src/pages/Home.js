import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Search from "../components/Search";
import Select from "../components/Select";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const categories = ["popular", "top rated", "now playing", "upcoming"];
    const [selectCategory, setSelectCategory] = useState(categories[0]);
    const [search, setSearch] = useState("");

    let baseURL = "https://api.themoviedb.org/3/movie";
    let searchURL = "https://api.themoviedb.org/3/search/movie"
    let api_key = "api_key=8510ce99b1c1d168b91ddf40e467565a";
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
        } else {
            getMovies();
        }
    }

    useEffect(() => {
        getMovies();
        document.title = "Movie Application";
    }, [selectCategory]);
    console.log(movies);

    const handleCategories = (e) => {
        setSelectCategory(e.target.value);
        console.log(selectCategory);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }


    return (
        <div>
            <Search search={search} onChange={handleSearch} onKeyDown={searchMovies} />
            <label htmlFor="show">Show me</label>
            <Select onChange={handleCategories} categories={categories} />
            <hr />
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    {movies.map((movie) => {
                        return (
                            <Movie key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                overview={movie.overview}
                                release_date={movie.release_date}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Home;