import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function DeleteDetailButton({ id, onDelete }) {
    return (
        <button className="action" onClick={() => onDelete(id)}>
            <FaTrashAlt />
        </button>
    );
}

export default DeleteDetailButton;
