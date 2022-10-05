import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Navigation({ logout, name }) {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/archive">Archive Page</Link>
                </li>
                <li>
                    <button onClick={logout} className="button-logout">
                        <FiLogOut />
                        {name}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
