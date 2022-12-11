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

    const getMovies = async () => {
        let url;
        switch (selectCategory) {
            case "popular":
                url = `https://api.themoviedb.org/3/movie/popular?api_key=8510ce99b1c1d168b91ddf40e467565a&language=en-US&page=1`;
                break;
            case "top rated":
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8510ce99b1c1d168b91ddf40e467565a&language=en-US&page=1`;
                break;
            case "now playing":
                url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8510ce99b1c1d168b91ddf40e467565a&language=en-US&page=1`;
                break;
            case "upcoming":
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=8510ce99b1c1d168b91ddf40e467565a&language=en-US&page=1`;
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

    useEffect(() => {
        getMovies();
        document.title = "Movie App";
    }, [selectCategory]);
    console.log(movies);

    function handleCategories(event) {
        setSelectCategory(event.target.value);
        console.log(selectCategory);
    }

    const onChange = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }

    const searchMovieByTitle = movies.filter((p) => {
        return p.title.toLocaleLowerCase().replace(" ", "").includes(search.toLocaleLowerCase().replace(" ", ""))
    })
    console.log('searchMovieByTitle ', searchMovieByTitle);

    return (
        <div>
            <Search search={search} onChange={onChange} />
            <label htmlFor="show">Show me</label>
            <Select onChange={handleCategories} categories={categories} />
            <hr />
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    {searchMovieByTitle.map((movie) => {
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