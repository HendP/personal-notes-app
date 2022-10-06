import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import ArchiveDetailButton from './ArchiveDetailButton';
import DeleteDetailButton from './DeleteDetailButton';
import { showFormattedDate } from '../utils/index';

function DetailNote({ note, onDelete, onArchive, onUnarchive }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">
                {showFormattedDate(note.createdAt)}
            </p>
            <div className="detail-page__body">{parser(note.body)}</div>
            <div className="detail-page__action">
                <ArchiveDetailButton
                    id={note.id}
                    onArchive={onArchive}
                    onUnarchive={onUnarchive}
                    archived={note.archived}
                />
                <DeleteDetailButton id={note.id} onDelete={onDelete} />
            </div>
        </section>
    );
}

DetailNote.propTypes = {
    note: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
};

export default DetailNote;
