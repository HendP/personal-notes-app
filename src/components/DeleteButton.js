import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
    return (
        <button
            className="note-item__delete-button"
            onClick={() => onDelete(id)}
        >
            <FaTrashAlt />
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
