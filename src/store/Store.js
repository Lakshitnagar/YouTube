import {configureStore} from '@reduxjs/toolkit';
import {YouTubeReducers} from "./reducers/YouTubeReducers";
import {presentationReducer} from "./reducers/PresentationReducer";

const store = configureStore({
    reducer: {
        youtubeSearchResults: YouTubeReducers,
        presentationConfig: presentationReducer,
    }
});

export default store;
