import PropTypes from "prop-types";

function Search({ search, onChange, onKeyDown }) {
    return (
        <div>
            <input type="text" value={search} onChange={onChange} onKeyDown={onKeyDown} placeholder="Search movie by title" />
        </div>
    );
}

Search.propTypes = {
    search: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default Search;