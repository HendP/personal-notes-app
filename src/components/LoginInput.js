import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { NotesConsumer } from '../context/NotesContext';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        login({ email, password });
    }

    return (
        <NotesConsumer>
            {(value) => (
                <form onSubmit={onSubmitHandler} className="input-login">
                    {value.locale === 'id' ? (
                        <label>Surel</label>
                    ) : (
                        <label>Email</label>
                    )}
                    <input
                        type="email"
                        placeholder={
                            value.locale === 'id'
                                ? 'Masukan surel anda'
                                : 'Input your email'
                        }
                        value={email}
                        onChange={onEmailChange}
                    />
                    {value.locale === 'id' ? (
                        <label>Kata Sandi</label>
                    ) : (
                        <label>Password</label>
                    )}
                    <input
                        type="password"
                        placeholder={
                            value.locale === 'id'
                                ? 'Masukan kata sandi anda'
                                : 'Input you password'
                        }
                        value={password}
                        onChange={onPasswordChange}
                    />
                    {value.locale === 'id' ? (
                        <button>Masuk</button>
                    ) : (
                        <button>Login</button>
                    )}
                </form>
            )}
        </NotesConsumer>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
