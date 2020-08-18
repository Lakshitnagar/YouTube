import {createReducer} from '@reduxjs/toolkit';
import {
    resetYouTubeSearchKeyword,
    resetYouTubeSearchResults,
    setYouTubeSearchKeyword,
    setYouTubeSearchResults,
    updateYouTubeSearchResults
} from '../actions/YouTubeActions';

const initialState = null;

const YouTubeReducers = createReducer(initialState, {
    [setYouTubeSearchResults]: (state, action) => {
        return action.payload;
    },
    [resetYouTubeSearchResults]: () => {
        return initialState;
    },
    [updateYouTubeSearchResults]: (state, action) => {
        let newPayload = action.payload;
        if (newPayload && state) {
            newPayload.items = [...state.items, ...newPayload.items];
        }
        return newPayload;
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
