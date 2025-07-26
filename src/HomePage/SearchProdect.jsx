
import React from 'react';
import { useSearch } from '../HomePage/context/ProdectsSerch';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search products..."
    />
  );
}

export default SearchInput;
