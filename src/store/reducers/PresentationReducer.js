import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {addApiFailureStatus, removeApiFailureStatus} from "../actions/PresentationAction";

export const apiFailureStatusReducer = createReducer([], {
    [addApiFailureStatus]: (state, action) => {
        const apiStatus = new Set([...state]);
        apiStatus.add(action.payload);
        return [...apiStatus];
    },
    [removeApiFailureStatus]: (state, action) => {
        const apiStatus = new Set([...state]);
        apiStatus.delete(action.payload);
        return [...apiStatus];
    }
});

export const presentationReducer = combineReducers({
    apiStatus: apiFailureStatusReducer,
});
