import React, {useState} from 'react';
import search from '../../assets/images/search_18dp.svg';
import './SearchForm.scss';
import {fetchYouTubeVideosByKeyword} from "../../store/actions/YouTubeActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export function SearchForm(props) {
    const [searchKeyword, setSearchKeyword] = useState('');

    const onSearchFormSubmit = (e) => {
        e.preventDefault();
        if (searchKeyword) props.fetchYouTubeVideosByKeyword(searchKeyword);
    };

    return (
        <div className="searchForm">
            <form className="searchForm__form" onSubmit={(e) => {
                onSearchFormSubmit(e)
            }}>
                <div className="searchForm__inputContainer">
                    <input id="search" autoCapitalize="none" autoComplete="off" autoCorrect="off"
                           type="text" spellCheck="false" placeholder="Search"
                           onChange={e => setSearchKeyword(e.target.value)}/>
                </div>

                <button id="search-icon" className="searchForm__submit" aria-label="Search">
                    <img src={search} alt='search'/>
                </button>
            </form>
        </div>
    );
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchYouTubeVideosByKeyword: (keyword) => dispatch(fetchYouTubeVideosByKeyword(keyword))
    };
};

SearchForm.propTypes = {
    fetchYouTubeVideosByKeyword: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SearchForm);
