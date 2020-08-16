import {createReducer} from '@reduxjs/toolkit';
import {resetYouTubeSearchResults, setYouTubeSearchResults} from '../actions/YouTubeActions';

const initialState = null;

const YouTubeReducers = createReducer(initialState, {
    [setYouTubeSearchResults]: (state, action) => {
        return action.payload;
    },
    [resetYouTubeSearchResults]: () => {
        return initialState;
    }
});

export {
    YouTubeReducers
};
