/* eslint-disable react/prop-types */
import { useState } from 'react';

const SearchSort = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="search-sort">
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name or author" />
      <select value={sortCriteria} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="author">Author</option>
        <option value="releaseDate">Release Date</option>
      </select>
    </div>
  );
};

export default SearchSort;
