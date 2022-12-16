import { appStorageName } from '../../globals/globalVariables';
import { createSlice } from '@reduxjs/toolkit';

function getFavs() {
    let favsFromStorage = localStorage.getItem(appStorageName);
    if (favsFromStorage === null) {
        favsFromStorage = [];
    } else {
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const initialState = {
    items: getFavs()
}

function getIndex(item, arr) {
    let newArr = Array.from(new Set(arr));
    let index = newArr.findIndex(arrItem => arrItem.id === item.id);
    console.log('index ', index);
    return index;
}

export const favsSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        addFav: (state, action) => {
            const newFavs = [...state.items, action.payload];
            localStorage.setItem(appStorageName, JSON.stringify(newFavs));
            state.items = newFavs;
        },
        deleteFav: (state, action) => {
            const itemsCopy = state.items;
            itemsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
            state.items = itemsCopy;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addFav, deleteFav } = favsSlice.actions

export default favsSlice.reducer;
