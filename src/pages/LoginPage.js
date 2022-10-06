import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import { NotesConsumer } from '../context/NotesContext';

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        if (!error) {
            loginSuccess(data);
        }
    }
    return (
        <NotesConsumer>
            {(value) => (
                <section className="login-page">
                    <LoginInput login={onLogin} />
                    {value.locale === 'id' ? (
                        <p>
                            Belum punya akun?
                            <Link to="/register"> Daftar di sini.</Link>
                        </p>
                    ) : (
                        <p>
                            Don't have an account yet?
                            <Link to="/register"> Register here.</Link>
                        </p>
                    )}
                </section>
            )}
        </NotesConsumer>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
