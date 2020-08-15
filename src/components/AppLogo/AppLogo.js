import React from 'react';
import logo from '../../assets/images/logo.svg';
import './AppLogo.scss';

function AppLogo() {
    return (
        <div className="appLogo">
            <img src={logo} alt={'logo'} height={30}/>
        </div>
    );
}

export default AppLogo;
