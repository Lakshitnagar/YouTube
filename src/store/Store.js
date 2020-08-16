import {configureStore} from '@reduxjs/toolkit';
import {YouTubeReducers} from "./reducers/YouTubeReducers";

const store = configureStore({
    reducer: {
        youtubeSearchResults: YouTubeReducers
    }
});

export default store;
