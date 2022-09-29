import React from 'react';
import SubmitButton from '../components/SubmitButton';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

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

    onSubmitNoteHandler(event) {
        event.preventDefault();
        addNote(this.state);
        this.props.navigate('/');
    }

    render() {
        return (
            <React.Fragment>
                <div className="add-new-page__input">
                    <input
                        className="add-new-page__input__title"
                        placeholder="Notes title"
                        onInput={this.onTitleChangeHandler}
                    />
                    <div
                        className="add-new-page__input__body"
                        data-placeholder="Write you notes here ..."
                        onInput={this.onBodyChangeHandler}
                        contentEditable
                    ></div>
                    <SubmitButton onClick={this.onSubmitNoteHandler} />
                </div>
            </React.Fragment>
        );
    }
}

export default AddPageWrapper;
