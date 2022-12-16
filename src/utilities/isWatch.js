function isWatch(arr, id) {
    const watchLaterLists = arr.some((obj) => obj.id === id)
    return watchLaterLists;

}

export default isWatch;