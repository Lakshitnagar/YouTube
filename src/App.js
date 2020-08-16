import React from 'react';
import './App.scss';
import AppHeader from "./components/AppHeader/AppHeader";
import PopularSearches from "./components/PopularSearches/PopularSearches";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
    return (
        <div className="app">
            <header>
                <AppHeader/>
            </header>

            <PopularSearches/>

            <SearchResult/>
        </div>
    );
}

export default App;
