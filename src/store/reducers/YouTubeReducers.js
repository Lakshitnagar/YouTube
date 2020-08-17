import {createReducer} from '@reduxjs/toolkit';
import {
    resetYouTubeSearchKeyword,
    resetYouTubeSearchResults,
    setYouTubeSearchKeyword,
    setYouTubeSearchResults
} from '../actions/YouTubeActions';

const initialState = null;

const YouTubeReducers = createReducer(initialState, {
    [setYouTubeSearchResults]: (state, action) => {
        return action.payload;
    },
    [resetYouTubeSearchResults]: () => {
        return initialState;
    }
});

const youTubeKeywordReducer = createReducer(initialState, {
    [setYouTubeSearchKeyword]: (state, action) => {
        return action.payload;
    },
    [resetYouTubeSearchKeyword]: () => {
        return initialState;
    }
});

export {
    YouTubeReducers,
    youTubeKeywordReducer
};
