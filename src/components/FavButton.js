import styles from './FavButton.module.css';

function FavButton({ movieObj, remove, handleFavClick }) {
    function handleAddFav() {
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav() {
        handleFavClick(false, movieObj);
    }

    return (
        <div className={styles.fav__button}>
            {remove === false ? (
                <button onClick={handleAddFav}>Add To Favorite</button>
            ) : (
                <button onClick={handleRemoveFav}>Remove From Favorite</button>
            )}
        </div>
    );
}

FavButton.defaultProps = {
    remove: false,
};

export default FavButton;
