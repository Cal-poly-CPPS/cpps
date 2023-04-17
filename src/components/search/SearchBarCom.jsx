import React, { useState } from 'react';
import './SearchBarCom.css'; // Import custom CSS styles
import { NavLink } from "react-router-dom";

function SearchBarCom({ options }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  // Handle changes to the input field
  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter the options based on the search term
    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredOptions.length > 0 && (
        <ul className="search-bar-dropdown">
          {filteredOptions.map((option, index) => (
            <li key={index}>{<NavLink style={{backgroundColor:'black'}}to={"/professorPage/?name=".concat(option.replace(/ /g,"_"))} ><button style={{width:'100%', bordercolor:'white', height:'50px'}}>{option}</button></NavLink>}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBarCom;