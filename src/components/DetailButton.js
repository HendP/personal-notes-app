import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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

DetailButton.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailButton;
