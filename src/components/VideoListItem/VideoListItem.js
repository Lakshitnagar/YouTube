import React from 'react';
import './VideoListItem.scss';
import PropTypes from "prop-types";

function VideoListItem(props) {
    return (
        <div className="videoListItem">
            <img className="videoListItem__thumbnail" src={props.videoDetail.snippet.thumbnails.medium.url}
                 alt='thumbnail'/>

            <div className="videoListItem__title">Title</div>
            <div className="videoListItem__description">Description</div>
        </div>
    );
}

export default VideoListItem;

VideoListItem.propTypes = {
    videoDetail: PropTypes.object,
};
