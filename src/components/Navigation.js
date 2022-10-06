import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiArchive, FiHome, FiMoon, FiSun } from 'react-icons/fi';
import { ThemeConsumer } from '../context/ThemeContext';

function Navigation({ logout, name }) {
    return (
        <ThemeConsumer>
            {(value) => (
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
                            <button onClick={value.toggleTheme} className="button-toggle">
                                {value.theme === 'dark' ? (
                                    <FiSun />
                                ) : (
                                    <FiMoon />
                                )}
                            </button>
                        </li>
                        <li>
                            <button onClick={logout} className="button-logout">
                                <FiLogOut />
                                {name}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </ThemeConsumer>
    );
}

export default Navigation;
