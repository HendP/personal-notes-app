import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes, onDelete, onArchive }) {
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

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteList;
