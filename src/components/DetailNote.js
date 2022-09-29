import React from 'react';
// import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import ArchiveDetailButton from './ArchiveDetailButton';
import DeleteDetailButton from './DeleteDetailButton';
import {showFormattedDate} from '../utils/index';

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
    console.log(body);
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
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

export default DetailNote;
