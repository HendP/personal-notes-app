import React from 'react';
import { FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SubmitButton = ({ onClick }) => {
    return (
        <React.Fragment>
            <button className="note-item__add-button" onClick={onClick}>
                <FiCheck />
            </button>
        </React.Fragment>
    );
};

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
