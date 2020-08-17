import React from 'react';
import './VideoListItem.scss';
import PropTypes from "prop-types";
import {getVideoDisplayDate} from "../../Utils/TimeUtil";

function VideoListItem(props) {
    return (
        <div className="videoListItem">
            <img className="videoListItem__thumbnail" src={props.videoDetail.snippet.thumbnails.medium.url}
                 alt='thumbnail'/>

            <div className="videoListItem__title">{props.videoDetail.snippet.title}</div>
            <div className="videoListItem__channel">{props.videoDetail.snippet.channelTitle}</div>
            <div className="videoListItem__time">{getVideoDisplayDate(props.videoDetail.snippet.publishedAt)}</div>
        </div>
    );
}

export default VideoListItem;

VideoListItem.propTypes = {
    videoDetail: PropTypes.object,
};
