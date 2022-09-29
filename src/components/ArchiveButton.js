import React from 'react';
import { FaArchive, FaArrowCircleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive, archived }) {
    return (
        <>
            {archived === false && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    <FaArchive />
                </button>
            )}

            {archived === true && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    <FaArrowCircleUp />
                </button>
            )}
        </>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
