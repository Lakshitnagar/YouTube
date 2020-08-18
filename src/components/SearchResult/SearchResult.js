import React from 'react';
import './SearchResult.scss';
import VideoListItem from "../VideoListItem/VideoListItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getVideoList} from "../../helpers/SearchResultHelper";
import {YOUTUBE_SEACRH_API} from "../../constants/ApiConstants";

export function SearchResult(props) {

    if (props.isError) {
        return (
            <div className="searchError">
                Ahh.. Something is not right !!
            </div>
        );
    }

    return (
        <div className="search">
            {props.searchKeyword && <div className="search__header">Showing results for "{props.searchKeyword}"</div>}
            <div className="search__result">
                {props.videoList && props.videoList.map((videoDetail, ind) => {
                    return <VideoListItem key={ind} videoDetail={videoDetail}/>
                })}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        videoList: getVideoList(state.youtubeSearchResults),
        searchKeyword: state.youtubeSearchKeyword,
        isError: state.presentationConfig.apiStatus.includes(YOUTUBE_SEACRH_API)
    };
};

SearchResult.propTypes = {
    videoList: PropTypes.array,
    searchKeyword: PropTypes.string,
    isError: PropTypes.bool
};

export default connect(mapStateToProps, null)(SearchResult);
