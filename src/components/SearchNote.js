import React from 'react';
import PropTypes from 'prop-types';
import { NotesConsumer } from '../context/NotesContext';

function SearchNote({ keyword, onSearch }) {
    return (
        <NotesConsumer>
            {(value) => (
                <input
                    type="search"
                    name="search-bar"
                    id="search-bar"
                    className="search-bar"
                    placeholder={value.locale === 'id' ? 'Pencarian cepat berdasarkan judul' : 'Quick search by title'}
                    value={keyword}
                    onChange={(e) => onSearch(e.target.value)}
                />
            )}
        </NotesConsumer>
    );
}

SearchNote.propTypes = {
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchNote;
