import {createAction} from "@reduxjs/toolkit";
import {
    RESET_YOU_TUBE_SEARCH_KEYWORD,
    RESET_YOU_TUBE_SEARCH_RESULTS,
    SET_YOU_TUBE_SEARCH_KEYWORD,
    SET_YOU_TUBE_SEARCH_RESULTS,
    UPDATE_YOU_TUBE_SEARCH_RESULTS
} from "../StoreConstants";
import {searchByKeyword, searchByKeywordNextPage} from "../../http/YoutubeClient";
import {addApiFailureStatus, removeApiFailureStatus} from "./PresentationAction";
import {YOUTUBE_SEACRH_API, YOUTUBE_SEACRH_API_NEXT_PAGE} from "../../constants/ApiConstants";

export const setYouTubeSearchResults = createAction(SET_YOU_TUBE_SEARCH_RESULTS);
export const updateYouTubeSearchResults = createAction(UPDATE_YOU_TUBE_SEARCH_RESULTS);
export const resetYouTubeSearchResults = createAction(RESET_YOU_TUBE_SEARCH_RESULTS);

export const setYouTubeSearchKeyword = createAction(SET_YOU_TUBE_SEARCH_KEYWORD);
export const resetYouTubeSearchKeyword = createAction(RESET_YOU_TUBE_SEARCH_KEYWORD);

export const fetchYouTubeVideosByKeyword = (keyword) => {
    return async (dispatch) => {
        let videosResponse = null;

        dispatch(setYouTubeSearchKeyword(keyword));
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

export const fetchYouTubeVideosByKeywordNextPage = (keyword, nextPageToken) => {
    return async (dispatch) => {
        let videosResponse = null;

        dispatch(removeApiFailureStatus(YOUTUBE_SEACRH_API_NEXT_PAGE));
        try {
            videosResponse = await searchByKeywordNextPage(keyword, nextPageToken);
            dispatch(updateYouTubeSearchResults(videosResponse));
        } catch (error) {
            dispatch(addApiFailureStatus(YOUTUBE_SEACRH_API_NEXT_PAGE));
        } finally {
        }
    };
};
