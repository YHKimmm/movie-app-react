import { appStorageWatchList } from '../../globals/globalVariables';
import { createSlice } from '@reduxjs/toolkit';

function getWatchLater() {
    let watchLaterFromStorage = localStorage.getItem(appStorageWatchList);
    if (watchLaterFromStorage === null) {
        watchLaterFromStorage = [];
    } else {
        watchLaterFromStorage = JSON.parse(watchLaterFromStorage);
    }
    return watchLaterFromStorage;
}

const initialState = {
    items: getWatchLater()
}

function getIndex(item, arr) {
    let newArr = Array.from(new Set(arr));
    let index = newArr.findIndex(arrItem => arrItem.id === item.id);
    console.log('watch-list index ', index);
    return index;
}

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        // state.items (items) came from initialState which is declared as line 14
        addWatchList: (state, action) => {
            const newWatchList = [...state.items, action.payload];
            localStorage.setItem(appStorageWatchList, JSON.stringify(newWatchList));
            state.items = newWatchList;
        },
        deleteWatchList: (state, action) => {
            const itemsCopy = state.items;
            itemsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(appStorageWatchList, JSON.stringify(itemsCopy));
            state.items = itemsCopy;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addWatchList, deleteWatchList } = watchListSlice.actions

export default watchListSlice.reducer;
