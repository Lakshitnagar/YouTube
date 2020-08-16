import React from 'react';
import './SearchResult.scss';
import VideoListItem from "../VideoListItem/VideoListItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getVideoList} from "../../helpers/SearchResultHelper";

export function SearchResult(props) {
    return (
        <div className="searchResult">
            {props.videoList && props.videoList.map((videoDetail, ind) => {
                return <VideoListItem key={ind} videoDetail={videoDetail}/>
            })}
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        videoList: getVideoList(state.youtubeSearchResults)
    };
};

SearchResult.propTypes = {
    videoList: PropTypes.array,
};

export default connect(mapStateToProps, null)(SearchResult);
