import styles from './WatchButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function WatchButton({ movieObj, remove, handleWatchClick }) {
    function handleAddWatchList() {
        handleWatchClick(true, movieObj);
    }

    function handleRemoveWatchList() {
        handleWatchClick(false, movieObj);
    }

    return (
        <div className={styles.watch__button}>
            {remove === false ? (
                <button onClick={handleAddWatchList}><FontAwesomeIcon icon={faPlus} size='2x' style={{ 'opacity': '0.3' }} />Add To Watch Later</button>
            ) : (
                <button onClick={handleRemoveWatchList}><FontAwesomeIcon icon={faPlus} size='2x' />Remove From Watch Later</button>
            )}
        </div>
    );
}

WatchButton.defaultProps = {
    remove: false,
};

export default WatchButton;
