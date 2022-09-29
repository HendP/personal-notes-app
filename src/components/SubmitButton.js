import React from 'react';
import { FiCheck } from 'react-icons/fi';

const SubmitButton = ({ onClick }) => {
    return (
        <React.Fragment>
            <button className="note-item__add-button" onClick={onClick}>
                <FiCheck />
            </button>
        </React.Fragment>
    );
};

export default SubmitButton;
