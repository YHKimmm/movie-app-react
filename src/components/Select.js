import PropTypes from "prop-types";


function Select({ onChange, categories }) {
    return (
        <select onChange={onChange} name="selectChart" id="selectChart">
            {categories.map((category, i) => {
                return (<option key={i} value={category}>{category.toLocaleUpperCase()}</option>)
            })}
        </select>
    );
}

Select.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Select;