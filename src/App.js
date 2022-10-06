import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { NotesProvider } from './context/NotesContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import { MdOutlineTranslate } from 'react-icons/md';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [name, setName] = useState('');
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'dark'
    );
    const [locale, setLocale] = useState(
        () => localStorage.getItem('locale') || 'id'
    );

    function toggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', theme);
        } else if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', theme);
        }
    }

    function toggleLocale() {
        if (locale === 'id') {
            setLocale('en');
            localStorage.setItem('locale', 'en');
        } else if (locale === 'en') {
            setLocale('id');
            localStorage.setItem('locale', 'id');
        }
    }

    function onLogout() {
        setAuthedUser(null);
        putAccessToken('');
    }

    async function onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setName(data.name);
    }

    useEffect(() => {
        async function initialUser() {
            const { data } = await getUserLogged();
            setAuthedUser(data);
            if (data !== null) {
                setName(data.name);
            }
            setInitializing(false);
        }
        document.documentElement.setAttribute('data-theme', theme);
        initialUser();
    }, [theme]);

    const loginComponent = (
        <NotesProvider value={{ theme, toggleTheme, locale, toggleLocale }}>
            <div className="app-container">
                <header>
                    {locale === 'id' ? (
                        <h1>Aplikasi Catatan Pribadi</h1>
                    ) : (
                        <h1>Personal Notes App</h1>
                    )}
                    <nav className="navigation">
                        <ul>
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="button-toggle"
                                >
                                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={toggleLocale}
                                    className="button-toggle"
                                >
                                    <MdOutlineTranslate />
                                    {locale === 'id' ? 'EN' : 'ID'}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <LoginPage loginSuccess={onLoginSuccess} />
                            }
                        />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
            </div>
        </NotesProvider>
    );

    const notesComponent = (
        <NotesProvider value={{ theme, toggleTheme, locale, toggleLocale }}>
            <div className="app-container">
                <header>
                    {locale === 'id' ? (
                        <h1>Aplikasi Catatan Pribadi</h1>
                    ) : (
                        <h1>Personal Notes App</h1>
                    )}
                    <Navigation
                        logout={onLogout}
                        name={name}
                        toggleTheme={toggleTheme}
                        theme={theme}
                    />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/archive" element={<ArchivePage />} />
                        <Route path="/add" element={<AddPage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </NotesProvider>
    );

    return (
        <>
            {authedUser === null && initializing === true
                ? null
                : authedUser === null && initializing === false
                ? loginComponent
                : notesComponent}
        </>
    );
}

export default App;
