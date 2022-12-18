import styles from './FavButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
                <button onClick={handleAddFav}><FontAwesomeIcon icon={faHeart} size='2x' style={{ 'opacity': '0.3' }} />Favourite this movie</button>
            ) : (
                <button onClick={handleRemoveFav}><FontAwesomeIcon icon={faHeart} size='2x' />Unfavourite this movie</button>
            )}
        </div>
    );
}

FavButton.defaultProps = {
    remove: false,
};

export default FavButton;
