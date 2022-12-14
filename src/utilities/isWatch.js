function isWatch(arr, id) {

    // Checks whether the object is watched later
    return arr.some((obj) => obj.id === id);

}

export default isWatch;