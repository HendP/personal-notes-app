import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';
import DetailButton from './DetailButton';
import parser from 'html-react-parser';

function NoteItem({
    title,
    body,
    createdAt,
    id,
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

export default NoteItem;
