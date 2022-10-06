import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiArchive, FiHome } from 'react-icons/fi';

function Navigation({ logout, name }) {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">
                        <FiHome />
                    </Link>
                </li>
                <li>
                    <Link to="/archive">
                        <FiArchive />
                    </Link>
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
