import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiArchive, FiHome, FiMoon, FiSun } from 'react-icons/fi';
import { MdOutlineTranslate } from 'react-icons/md';
import { NotesConsumer } from '../context/NotesContext';

function Navigation({ logout, name }) {
    return (
        <NotesConsumer>
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
                            <button
                                onClick={value.toggleTheme}
                                className="button-toggle"
                            >
                                {value.theme === 'dark' ? (
                                    <FiSun />
                                ) : (
                                    <FiMoon />
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={value.toggleLocale}
                                className="button-toggle"
                            >
                                <MdOutlineTranslate />
                                {value.locale === 'id' ? 'EN' : 'ID'}
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
        </NotesConsumer>
    );
}

export default Navigation;
