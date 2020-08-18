import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import './PopularSearches.scss';
import Chip from "../common/Chip/Chip";
import {fetchYouTubeVideosByKeyword} from "../../store/actions/YouTubeActions";

const popularSearches = ["All Recommendations", "Sushant Singh Rajput", "Comedy", "Thrillers", "Spookiz", "TED Talks"];

export function PopularSearches(props) {
    const onChipClick = (keyword) => {
        props.fetchYouTubeVideosByKeyword(keyword);
    };

    return (
        <div>
            <div className="popularSearches">
                <div className="popularSearches__label">Popular Searches</div>

                {popularSearches.map((popularSearch, ind) => {
                    return <div className="popularSearches__items" key={ind}>
                        <Chip text={popularSearch} onClick={onChipClick}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchYouTubeVideosByKeyword: (keyword) => dispatch(fetchYouTubeVideosByKeyword(keyword))
    };
};

PopularSearches.propTypes = {
    fetchYouTubeVideosByKeyword: PropTypes.func
};

export default connect(null, mapDispatchToProps)(PopularSearches);
