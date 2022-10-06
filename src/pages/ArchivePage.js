import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    getArchivedNotes,
    deleteNote,
    unarchiveNote,
} from '../utils/network-data';
import { toast } from 'react-toastify';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import LoadingComponent from '../components/LoadingComponent';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    useEffect(() => {
        async function initialNotes() {
            const { data } = await getArchivedNotes();
            setNotes(data);
        }
        initialNotes();
    }, []);

    return (
        <ArchiveNotes
            defaultKeyword={keyword}
            keywordChange={changeSearchParams}
            notes={notes}
        />
    );
}

class ArchiveNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            keyword: props.defaultKeyword || '',
            isLoading: false,
            isLoadingAction: false,
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        this.setState(() => {
            return {
                isLoading: true,
            };
        });
        const { data } = await getArchivedNotes();
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

            const { data } = await getArchivedNotes();

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

    async onUnarchiveHandler(id) {
        try {
            await unarchiveNote(id);

            this.setState(() => {
                return {
                    isLoadingAction: true,
                };
            });

            const { data } = await getArchivedNotes();

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
                <h1>Archive Notes</h1>
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
                        onArchive={this.onUnarchiveHandler}
                    />
                )}
                {this.state.isLoadingAction && <LoadingComponent />}
                <AddButton />
            </section>
        );
    }
}

export default ArchivePageWrapper;
