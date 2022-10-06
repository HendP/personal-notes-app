import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { NotesConsumer } from '../context/NotesContext';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
        await register(user);
    }

    return (
        <NotesConsumer>
            {(value) => (
                <section className="register-page">
                    <RegisterInput register={onRegisterHandler} />
                    {value.locale === 'id' ? (
                        <p>
                            Kembali ke <Link to="/">Halaman Masuk</Link>
                        </p>
                    ) : (
                        <p>
                            Back to <Link to="/">Login Page</Link>
                        </p>
                    )}
                </section>
            )}
        </NotesConsumer>
    );
}

export default RegisterPage;
