import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <ArchiveNotes
            defaultKeyword={keyword}
            keywordChange={changeSearchParams}
        />
    );
}

class ArchiveNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            };
        });
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
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
                    onArchive={this.onUnarchiveHandler}
                />
                <AddButton />
            </section>
        );
    }
}

export default ArchivePageWrapper;
