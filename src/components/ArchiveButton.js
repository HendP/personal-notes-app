import React from 'react';
import {FaArchive, FaArrowCircleUp } from 'react-icons/fa';

function ArchiveButton({ id, onArchive, archived }) {
    return (
        <React.Fragment>
            {archived === false && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    <FaArchive/>
                </button>
            )}

            {archived === true && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    <FaArrowCircleUp/>
                </button>
            )}
        </React.Fragment>
    );
}

export default ArchiveButton;
