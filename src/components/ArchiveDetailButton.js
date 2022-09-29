import React from 'react';
import { FaArchive, FaArrowCircleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ArchiveDetailButton({ id, onArchive, onUnarchive, archived }) {
    return (
        <React.Fragment>
            {archived === false && (
                <button className="action" onClick={() => onArchive(id)}>
                    <FaArchive />
                </button>
            )}

            {archived === true && (
                <button className="action" onClick={() => onUnarchive(id)}>
                    <FaArrowCircleUp />
                </button>
            )}
        </React.Fragment>
    );
}

ArchiveDetailButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default ArchiveDetailButton;
