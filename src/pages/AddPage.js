import React from 'react';
import SubmitButton from '../components/SubmitButton';
import { addNote } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import { NotesConsumer } from '../context/NotesContext';

function AddPageWrapper() {
    const navigate = useNavigate();

    return <AddPage navigate={navigate} />;
}

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitNoteHandler = this.onSubmitNoteHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            };
        });
    }

    async onSubmitNoteHandler(event) {
        event.preventDefault();
        try {
            await addNote(this.state);
            toast.success('Catatan berhasil ditambahkan', {});
            this.props.navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('Catatan gagal ditambahkan');
        }
    }

    render() {
        return (
            <NotesConsumer>
                {(value) => (
                    <React.Fragment>
                        <div className="backToHome">
                            <Link to="/">
                                <FiArrowLeft />
                                {value.locale === 'id' ? 'Kembali' : 'Back'}
                            </Link>
                        </div>
                        <div className="add-new-page__input">
                            <input
                                className="add-new-page__input__title"
                                placeholder={
                                    value.locale === 'id'
                                        ? 'Judul Catatan'
                                        : 'Notes Title'
                                }
                                onInput={this.onTitleChangeHandler}
                            />
                            <div
                                className="add-new-page__input__body"
                                data-placeholder={
                                    value.locale === 'id'
                                        ? 'Tulis catatanmu disini...'
                                        : 'Write your notes here...'
                                }
                                onInput={this.onBodyChangeHandler}
                                contentEditable
                            ></div>
                            <SubmitButton onClick={this.onSubmitNoteHandler} />
                        </div>
                    </React.Fragment>
                )}
            </NotesConsumer>
        );
    }
}

export default AddPageWrapper;
