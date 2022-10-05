import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        register({ name: name, email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label>Nama</label>
            <input
                type="name"
                placeholder="Masukan nama anda"
                value={name}
                onChange={onNameChange}
            />
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
            <button>Daftar</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
