import {createAction} from "@reduxjs/toolkit";
import {RESET_YOU_TUBE_SEARCH_RESULTS, SET_YOU_TUBE_SEARCH_RESULTS} from "../StoreConstants";
import {searchByKeyword} from "../../http/YoutubeClient";

export const setYouTubeSearchResults = createAction(SET_YOU_TUBE_SEARCH_RESULTS);
export const resetYouTubeSearchResults = createAction(RESET_YOU_TUBE_SEARCH_RESULTS);

export const fetchYouTubeVideosByKeyword = (keyword) => {
    return async (dispatch) => {
        let videosResponse = null;

        try {
            videosResponse = await searchByKeyword(keyword);
            dispatch(setYouTubeSearchResults(videosResponse));
        } catch (error) {

        } finally {
        }
    };
};
