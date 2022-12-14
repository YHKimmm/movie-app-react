// Fav Button

function FavButton({ movieObj, remove, handleFavClick }) {
    function handleAddFav() {
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav() {
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {remove === false ? (
                <button onClick={handleAddFav}>Add To Favorite</button>
            ) : (
                <button onClick={handleRemoveFav}>Remove From Favorite</button>
            )}
        </>
    );
}

FavButton.defaultProps = {
    remove: false,
};

export default FavButton;
