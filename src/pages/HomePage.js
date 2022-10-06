import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import { toast } from 'react-toastify';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import LoadingComponent from '../components/LoadingComponent';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    useEffect(() => {
        async function initialNotes() {
            const { data } = await getActiveNotes();
            setNotes(data);
        }
        initialNotes();
    }, []);

    return (
        <NotesApp
            defaultKeyword={keyword}
            keywordChange={changeSearchParams}
            notes={notes}
        />
    );
}

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            keyword: props.defaultKeyword || '',
            isLoading: false,
            isLoadingAction: false,
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        this.setState(() => {
            return {
                isLoading: true,
            };
        });
        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
                isLoading: false,
            };
        });
    }

    async onDeleteHandler(id) {
        try {
            await deleteNote(id);

            this.setState(() => {
                return {
                    isLoadingAction: true,
                };
            });

            const { data } = await getActiveNotes();

            this.setState(() => {
                return {
                    notes: data,
                    isLoadingAction: false,
                };
            });

            toast.success('Catatan berhasil di hapus', {});
        } catch (error) {
            console.log(error);
            toast.error('Catatan gagal di hapus', {});
        }
    }

    async onArchiveHandler(id) {
        try {
            await archiveNote(id);

            this.setState(() => {
                return {
                    isLoadingAction: true,
                };
            });

            const { data } = await getActiveNotes();

            this.setState(() => {
                return {
                    notes: data,
                    isLoadingAction: false,
                };
            });

            toast.success('Catatan Berhasil di arsipkan', {});
        } catch (error) {
            console.log(error);
            toast.error('Catatan gagal di arsipkan', {});
        }
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
                {this.state.isLoading ? (
                    <LoadingComponent />
                ) : (
                    <NoteList
                        notes={notes}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                )}
                {this.state.isLoadingAction && <LoadingComponent />}
                <AddButton />
            </section>
        );
    }
}

export default HomePageWrapper;
