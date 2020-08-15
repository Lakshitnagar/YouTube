import React from 'react';
import './PopularSearches.scss';
import Chip from "../common/Chip/Chip";

const popularSearches = ["All Recommendations", "Sushant Singh Rajput", "Comedy", "Thrillers", "Spookiz", "TED Talks"];

function PopularSearches() {
    return (
        <div className="popularSearches">
            <div className="popularSearches__label">Popular Searches</div>

            {popularSearches.map((popularSearch, ind)=>{
                return <div className="popularSearches__items" key={ind}>
                    <Chip text={popularSearch}/>
                </div>
            })}
        </div>
    );
}

export default PopularSearches;
