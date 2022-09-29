import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AddButton = ({ onInputHandle, onAdd }) => {
    return (
        <React.Fragment>
            <Link
                to="/add"
                state={{ onInputHandler: onInputHandle, onAdd: onAdd }}
            >
                <button className="note-item__add-button">
                    <FiPlus />
                </button>
            </Link>
        </React.Fragment>
    );
};

export default AddButton;
