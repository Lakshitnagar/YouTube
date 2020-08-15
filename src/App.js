import React from 'react';
import './App.scss';
import AppHeader from "./components/AppHeader/AppHeader";
import PopularSearches from "./components/PopularSearches/PopularSearches";

function App() {
    return (
        <div className="app">
            <header>
                <AppHeader/>
            </header>

            <PopularSearches/>
        </div>
    );
}

export default App;
