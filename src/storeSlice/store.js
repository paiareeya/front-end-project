import { configureStore } from '@reduxjs/toolkit';
import contextReducer from './contextSlice/Context';  // ไฟล์ที่มี reducer ของ contextSlice

const store = configureStore({
    reducer: {
        context: contextReducer,
        
    },
});

export default store;