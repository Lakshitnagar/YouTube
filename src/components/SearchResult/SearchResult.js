import React from 'react';
import './SearchResult.scss';
import VideoListItem from "../VideoListItem/VideoListItem";

const searchResults = [
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    },
    {
        thumbnail: "",
        title: "",
        description: "",
        duration: ""
    }
];

function SearchResult() {
    return (
        <div className="searchResult">
            {searchResults.map((searchResult, ind)=>{
                return <VideoListItem key={ind} />
            })}
        </div>
    );
}

export default SearchResult;
