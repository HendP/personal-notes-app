import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';
import DetailButton from './DetailButton';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function NoteItem({
    id,
    title,
    body,
    createdAt,
    onDelete,
    onArchive,
    archived,
}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">
                    {showFormattedDate(createdAt)}
                </p>
                <p className="note-item__body">{parser(body)}</p>
            </div>
            <div className="note-item__action">
                <DetailButton id={id} />
                <ArchiveButton
                    id={id}
                    onArchive={onArchive}
                    archived={archived}
                />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NoteItem;
