import React from 'react';
import PropTypes from 'prop-types';

function SearchNote({ keyword, onSearch }) {
    return (
        <input
            type="search"
            name="search-bar"
            id="search-bar"
            className="search-bar"
            placeholder="Quick Search by Title"
            value={keyword}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

SearchNote.propTypes = {
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchNote;
