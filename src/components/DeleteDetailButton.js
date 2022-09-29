import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function DeleteDetailButton({ id, onDelete }) {
    return (
        <button className="action" onClick={() => onDelete(id)}>
            <FaTrashAlt />
        </button>
    );
}

DeleteDetailButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteDetailButton;
