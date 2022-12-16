import { configureStore } from '@reduxjs/toolkit'
import favsReducer from '../features/favs/favsSlice';
import watchReducer from '../features/watch/watchSlice';

export const store = configureStore({
    reducer: {
        favs: favsReducer,
        watch: watchReducer
    }
});
