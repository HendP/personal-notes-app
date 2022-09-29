import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeEventHandler =
            this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler =
            this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            const currentInput = event.target.value;
            if (currentInput.length <= 50) {
                return {
                    title: currentInput,
                };
            }
            return;
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            };
        });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">
                    Sisa Karakter: {50 - this.state.title.length}
                </p>
                <input
                    type="text"
                    placeholder="Ini adalah judul ..."
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required
                />
                <textarea
                    id="body"
                    name="body"
                    placeholder="Tuliskan catatanmu di sini ..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    style={{ resize: 'none' }}
                    required
                />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteInput;
