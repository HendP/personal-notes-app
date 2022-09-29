import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/archive">Archive Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
