import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <NotesApp defaultKeyword={keyword} keywordChange={changeSearchParams} />
    );
}

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
            title: '',
            body: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    onArchiveHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase());
        });

        return (
            <section className="note-app__body">
                <h1>Active Notes</h1>
                <SearchNote
                    keyword={this.state.keyword}
                    onSearch={this.onKeywordChangeHandler}
                />
                <NoteList
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <AddButton />
            </section>
        );
    }
}

export default HomePageWrapper;
