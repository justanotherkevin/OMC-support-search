import React from 'react'
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return (
    <div>
    <form className="search-form">
      <input 
        type="text" 
        className="search" 
        placeholder="search" 
        value={ props.searchInput ? props.searchInput : ''}  
        onChange={props.searchBarHandleChange}
      />
      
    </form>
  </div>
  )
}

SearchBar.propTypes = {
  searchBarHandleChange: PropTypes.func.isRequired
};


export default SearchBar