import React from 'react';
import '../styles/searchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-bar__input" placeholder="Введите название породы" />
      <button type="button" className="search-bar__button">
        Найти
      </button>
    </div>
  );
};

export default SearchBar;
