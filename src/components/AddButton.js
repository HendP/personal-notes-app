import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <React.Fragment>
            <Link to="/add">
                <button className="note-item__add-button">
                    <FiPlus />
                </button>
            </Link>
        </React.Fragment>
    );
};

export default AddButton;
