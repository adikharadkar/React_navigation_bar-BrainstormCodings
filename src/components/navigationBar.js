import React from 'react';

import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="NavigationBar">
            <h1>My App</h1>
            <div className="topnav-right">
                <h2>Dashboard</h2>
                <h2>Login</h2>
                <h2>Registration</h2>
            </div>
        </div>
    )
}

export default NavigationBar;