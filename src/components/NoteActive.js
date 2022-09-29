import React from 'react';
import NotesList from './NotesList';

function NoteActive({
    query,
    activeNotes,
    onDelete,
    onArchive,
    filteredActiveNotes,
}) {
    return (
        <React.Fragment>
            <h2>Catatan Aktif</h2>
            {query.length <= 0 ? (
                <NotesList
                    status="Active"
                    notes={activeNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            ) : (
                <NotesList
                    status="Active"
                    notes={filteredActiveNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            )}
        </React.Fragment>
    );
}

export default NoteActive;
