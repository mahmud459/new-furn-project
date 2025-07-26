
import React, { createContext, useContext, useState } from "react";

// Create the search context
const SearchProductContext = createContext();

// Custom hook to use the search context easily
export const useSearch = () => useContext(SearchProductContext);

// Provider component to wrap your app with search functionality
export const SearchProductProvider = ({ children }) => {
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchProductContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchProductContext.Provider>
  );
};
