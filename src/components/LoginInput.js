import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        login({ email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-login">
            <label>Email</label>
            <input
                type="email"
                placeholder="Masukan email anda"
                value={email}
                onChange={onEmailChange}
            />
            <label>Password</label>
            <input
                type="password"
                placeholder="Masukan password anda"
                value={password}
                onChange={onPasswordChange}
            />
            <button>Masuk</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
