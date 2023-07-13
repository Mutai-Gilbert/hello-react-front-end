import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingsReducer from './greetingsSlice';

const rootReducer = combineReducers({
    greetings: greetingsReducer,
});

export default function configureAppStore(preloadedState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}