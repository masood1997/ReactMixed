import React from 'react';

const SearchItem = ({ search = '', setSearch }) => {
  return (
    <div className='searchForm'>
      <input
        type="text"
        role="searchbox"
        placeholder="Search Items"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchItem;
