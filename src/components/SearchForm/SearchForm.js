import React from 'react';
import search from '../../assets/images/search_18dp.svg';
import './SearchForm.scss';

function SearchForm() {
    return (
        <div className="searchForm">
            <form className="searchForm__form">
                <div className="searchForm__inputContainer">
                    <input id="search" autoCapitalize="none" autoComplete="off" autoCorrect="off"
                           name="search_query"
                           tabIndex="0" type="text" spellCheck="false" placeholder="Search"/>
                </div>

                <button id="search-icon" className="searchForm__submit" aria-label="Search">
                    <img src={search} alt='search'/>
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
