import {createAction} from "@reduxjs/toolkit";
import {RESET_YOU_TUBE_SEARCH_RESULTS, SET_YOU_TUBE_SEARCH_RESULTS} from "../StoreConstants";
import {searchByKeyword} from "../../http/YoutubeClient";
import {addApiFailureStatus, removeApiFailureStatus} from "./PresentationAction";
import {YOUTUBE_SEACRH_API} from "../../constants/ApiConstants";

export const setYouTubeSearchResults = createAction(SET_YOU_TUBE_SEARCH_RESULTS);
export const resetYouTubeSearchResults = createAction(RESET_YOU_TUBE_SEARCH_RESULTS);

export const fetchYouTubeVideosByKeyword = (keyword) => {
    return async (dispatch) => {
        let videosResponse = null;

        dispatch(removeApiFailureStatus(YOUTUBE_SEACRH_API));
        try {
            videosResponse = await searchByKeyword(keyword);
            dispatch(setYouTubeSearchResults(videosResponse));
        } catch (error) {
            dispatch(addApiFailureStatus(YOUTUBE_SEACRH_API));
        } finally {
        }
    };
};
