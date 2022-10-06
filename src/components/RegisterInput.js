import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { NotesConsumer } from '../context/NotesContext';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();
        register({ name: name, email, password });
    }

    return (
        <NotesConsumer>
            {(value) => (
                <form onSubmit={onSubmitHandler} className="input-register">
                    {value.locale === 'id' ? (
                        <label>Nama</label>
                    ) : (
                        <label>Name</label>
                    )}
                    <input
                        type="name"
                        placeholder={
                            value.locale === 'id'
                                ? 'Masukan nama anda'
                                : 'Input your name'
                        }
                        value={name}
                        onChange={onNameChange}
                    />
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
                                : 'Masukan email anda'
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
                                : 'Input your password'
                        }
                        value={password}
                        onChange={onPasswordChange}
                    />
                    {value.locale === 'id' ? (
                        <button>Daftar</button>
                    ) : (
                        <button>Register</button>
                    )}
                </form>
            )}
        </NotesConsumer>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
