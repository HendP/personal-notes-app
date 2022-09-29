import React from 'react';
import { FaArchive, FaArrowCircleUp } from 'react-icons/fa';

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

export default ArchiveDetailButton;
