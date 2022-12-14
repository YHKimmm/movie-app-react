import PropTypes from "prop-types";

function Search({ search, onChange, onKeyDown }) {
    return (
        <div>
            <label htmlFor="show">Show me</label>
            <input type="text" value={search} onChange={onChange} onKeyDown={onKeyDown} placeholder="Search movie" />
        </div>
    );
}

Search.propTypes = {
    search: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default Search;