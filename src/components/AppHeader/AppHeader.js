import React from 'react';
import './AppHeader.scss';
import AppLogo from "../AppLogo/AppLogo";
import SearchForm from "../SearchForm/SearchForm";

function AppHeader() {
    return (
        <div className="appHeader">
            <AppLogo/>

            <SearchForm/>

            <div className="appHeader__account">
                accounts
            </div>
        </div>
    );
}

export default AppHeader;
