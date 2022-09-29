import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import ArchiveDetailButton from './ArchiveDetailButton';
import DeleteDetailButton from './DeleteDetailButton';
import { showFormattedDate } from '../utils/index';

function DetailNote({
    id,
    title,
    body,
    archived,
    createdAt,
    onDelete,
    onArchive,
    onUnarchive,
}) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">
                {showFormattedDate(createdAt)}
            </p>
            <div className="detail-page__body">{parser(body)}</div>
            <div className="detail-page__action">
                <ArchiveDetailButton
                    id={id}
                    onArchive={onArchive}
                    onUnarchive={onUnarchive}
                    archived={archived}
                />
                <DeleteDetailButton id={id} onDelete={onDelete} />
            </div>
        </section>
    );
}

DetailNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
};

export default DetailNote;
