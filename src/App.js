import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';
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
    const [name, setName] = useState('');

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

    const loginComponent = (
        <div className="app-container">
            <header>
                <h1>Personal Notes App</h1>
            </header>
            <main>
                <Routes>
                    <Route
                        path="/*"
                        element={<LoginPage loginSuccess={onLoginSuccess} />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>
        </div>
    );

    const notesComponent = (
        <div className="app-container">
            <header>
                <h1>Personal Notes App</h1>
                <Navigation logout={onLogout} name={name} />
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
    );

    return <>{authedUser === null ? loginComponent : notesComponent}</>;
}

export default App;
