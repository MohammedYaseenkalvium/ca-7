
import React, { useState } from 'react';
import "./search.css"

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {

   
  };

  return (
    <div className='search'>
        <div className='container'>
      <input
        type='text'
        placeholder='Search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
