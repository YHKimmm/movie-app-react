// Is Fav

function isFav(arr, id) {
    const favoriteMovie = arr.some((obj) => obj.id === id);
    return favoriteMovie;

}

export default isFav;