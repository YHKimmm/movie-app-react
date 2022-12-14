import PropTypes from "prop-types";
import styles from './Select.module.css';


function Select({ onChange, categories }) {
    return (
        <section className={styles.select__form}>
            <label htmlFor="selectCategories">Show me</label>
            <select onChange={onChange} name="selectCategories" id="selectCategories">
                {categories.map((category, i) => {
                    return (<option key={i} value={category}>{category.toLocaleUpperCase()}</option>)
                })}
            </select>
        </section>
    );
}

Select.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Select;