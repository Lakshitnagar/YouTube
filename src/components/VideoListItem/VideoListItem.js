import React from 'react';
import './VideoListItem.scss';
import logo from '../../assets/images/logo.svg';

function VideoListItem() {
    return (
        <div className="videoListItem">
            <img className="videoListItem__thumbnail" src={logo} alt='thumbnail'/>

            <div className="videoListItem__title">Title</div>
            <div className="videoListItem__description">Description</div>
        </div>
    );
}

export default VideoListItem;
