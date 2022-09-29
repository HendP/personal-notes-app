import React from 'react';

function SearchNote({ query, onSearch }) {
    return (
        <input
            type="search"
            name="search-bar"
            id="search-bar"
            className="search-bar"
            placeholder="Quick Search by Title"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchNote;
