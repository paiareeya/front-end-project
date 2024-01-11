import { configureStore } from '@reduxjs/toolkit';
import contextReducer from './contextSlice/Context'; 

const store = configureStore({
    reducer: {
        context: contextReducer,
    },
});

export default store;