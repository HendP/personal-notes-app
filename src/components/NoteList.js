import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, status }) {
    return (
        <React.Fragment>
            {notes.length > 0 && (
                <div className="notes-list">
                    {notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            status={status}
                            {...note}
                        />
                    ))}
                </div>
            )}
            {notes.length <= 0 && (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </React.Fragment>
    );
}

export default NoteList;
