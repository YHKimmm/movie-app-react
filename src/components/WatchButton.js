import styles from './WatchButton.module.css';

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
                <button onClick={handleAddWatchList}>Add To Watch List</button>
            ) : (
                <button onClick={handleRemoveWatchList}>Remove From Watch List</button>
            )}
        </div>
    );
}

WatchButton.defaultProps = {
    remove: false,
};

export default WatchButton;
