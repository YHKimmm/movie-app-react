// Is Fav

function isFav(arr, id) {

    // Checks whether the object is favourited
    return arr.some((obj) => obj.id === id);

}

export default isFav;