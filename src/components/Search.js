import PropTypes from "prop-types";
import { searchURL, api_key } from "../globals/globalVariables";
import { useRef, useState } from "react";
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Search({ getMovies, setMovies }) {
    const [search, setSearch] = useState("");

    const ref = useRef();

    const getSearchMovies = async () => {
        let url = `${searchURL}?${api_key}&query=${search}`;
        const response = await fetch(url);
        const json = await response.json();
        let results = json.results.slice(0, 12);
        console.log('search ', results);
        setMovies(results);
    }

    const searchMovies = (e) => {
        if (e.key === "Enter" && search) {
            getSearchMovies();
            setSearch("");
        } else {
            getMovies();
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    return (
        <div className={styles.search__input}>
            <FontAwesomeIcon icon={faSearch} size='2x' style={{ 'padding': '20px' }} />
            <input type="text"
                ref={ref}
                value={search}
                onChange={handleSearch}
                onKeyDown={searchMovies}
                placeholder="Search movie by a title" />
        </div>
    );
}

Search.propTypes = {
    getMovies: PropTypes.func.isRequired,
    setMovies: PropTypes.any.isRequired
}


export default Search;