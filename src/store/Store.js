import {configureStore} from '@reduxjs/toolkit';
import {youTubeKeywordReducer, YouTubeReducers} from "./reducers/YouTubeReducers";
import {presentationReducer} from "./reducers/PresentationReducer";

const store = configureStore({
    reducer: {
        youtubeSearchResults: YouTubeReducers,
        youtubeSearchKeyword: youTubeKeywordReducer,
        presentationConfig: presentationReducer,
    }
});

export default store;
