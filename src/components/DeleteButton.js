import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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

export default DeleteButton;
