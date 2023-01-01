import PropTypes from "prop-types";
import { searchURL, api_key } from "../globals/globalVariables";
import { useEffect } from "react";
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { setGlobalState, useGlobalState } from "../store";
function Search({ getMovies, setSearchMovie }) {
    const [defaultSearch] = useGlobalState("defaultSearch");

    const getSearchMovies = async () => {
        let url = `${searchURL}?${api_key}&query=${defaultSearch}`;
        const response = await fetch(url);
        const json = await response.json();
        let results = json.results.slice(0, 12);
        setSearchMovie(results);
        console.log('search ', results);
    }

    const searchMovies = (e) => {
        if (e.key === "Enter" && defaultSearch) {
            e.preventDefault();
            getSearchMovies();
            setGlobalState("defaultSearch", "");
        } else {
            getMovies();
        }
    }

    const mobileSearch = () => {
        if (defaultSearch) {
            getSearchMovies();
        } else {
            getMovies();
        }
    }

    const searchMovieAsGlobal = () => {
        if (defaultSearch) {
            getSearchMovies();
        }
    }

    const handleSearch = (e) => {
        setGlobalState("defaultSearch", e.target.value);
    }

    useEffect(() => {
        searchMovieAsGlobal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultSearch])

    return (
        <div className={styles.search__input} >
            <FontAwesomeIcon icon={faSearch} size='2x' style={{ 'padding': '20px' }} />
            <input type="text"
                value={defaultSearch}
                onChange={handleSearch}
                onKeyDown={searchMovies}
                onTouchStart={mobileSearch}
                placeholder="Search movie by a title" />
        </div>
    );
}

Search.propTypes = {
    getMovies: PropTypes.func.isRequired,
    setSearchMovie: PropTypes.any.isRequired
}


export default Search;