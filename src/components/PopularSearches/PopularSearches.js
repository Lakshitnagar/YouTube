import React from 'react';
import './PopularSearches.scss';

const popularSearches = ["All Recommendations", "Sushant Singh Rajput", "Comedy", "Thrillers", "Spookiz", "TED Talks"];

function PopularSearches() {
    return (
        <div className="popularSearches">
            <div className="popularSearches__label">Popular Searches</div>

            {popularSearches.map((popularSearch)=>{
                return <div className="popularSearches__items">{popularSearch}</div>
            })}
        </div>
    );
}

export default PopularSearches;
