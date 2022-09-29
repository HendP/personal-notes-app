import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DetailButton({ id }) {
    const navigate = useNavigate();

    const onDetailHandler = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <button className="note-item__detail-button" onClick={onDetailHandler}>
            <FaEye />
        </button>
    );
}

export default DetailButton;
