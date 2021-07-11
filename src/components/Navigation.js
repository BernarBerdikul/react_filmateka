import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Main</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromLocation: true,
                },
            }}>About</Link>
        </div>
    );
}

export default Navigation;