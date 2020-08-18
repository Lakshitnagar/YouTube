import React from 'react';
import './SearchResult.scss';
import VideoListItem from "../VideoListItem/VideoListItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getNextPageToken, getVideoList} from "../../helpers/SearchResultHelper";
import {YOUTUBE_SEACRH_API} from "../../constants/ApiConstants";
import {fetchYouTubeVideosByKeywordNextPage} from "../../store/actions/YouTubeActions";

export function SearchResult(props) {
    const searchOnScrollHandler = (e) => {
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            props.fetchYouTubeVideosByKeywordNextPage(props.searchKeyword, props.nextPageToken);
        }
    };

    if (props.isError) {
        return (
            <div className="searchError">
                Ahh.. Something is not right !!
            </div>
        );
    }

    return (
        <div className="search" onScroll={searchOnScrollHandler}>
            {props.searchKeyword && <div className="search__header">Showing results for "{props.searchKeyword}"</div>}
            <div className="search__result">
                {props.videoList.length !== 0 && props.videoList.map((videoDetail, ind) => {
                    return <VideoListItem key={ind} videoDetail={videoDetail}/>
                })}
                {!props.videoList.length && <div>Search videos by any keyword</div>}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        videoList: getVideoList(state.youtubeSearchResults),
        nextPageToken: getNextPageToken(state.youtubeSearchResults),
        searchKeyword: state.youtubeSearchKeyword,
        isError: state.presentationConfig.apiStatus.includes(YOUTUBE_SEACRH_API)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchYouTubeVideosByKeywordNextPage: (keyword, nextPageToken) => dispatch(fetchYouTubeVideosByKeywordNextPage(keyword, nextPageToken))
    };
};

SearchResult.propTypes = {
    videoList: PropTypes.array,
    searchKeyword: PropTypes.string,
    nextPageToken: PropTypes.string,
    isError: PropTypes.bool,
    fetchYouTubeVideosByKeywordNextPage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
