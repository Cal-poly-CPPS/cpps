import React, { useState, useEffect} from 'react';
import './SearchBarCom.css'; // Import custom CSS styles
import { NavLink } from "react-router-dom";
import { DashboardLayout } from '../Layout';

import './courses.json';

function SearchBarCom({ options }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const filteredData = data.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleItemClick = (item) => {
    setSearchTerm(item.name);
    setShowDropdown(false);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      {showDropdown && filteredData.length > 0 && (
        <ul className="search-bar-dropdown">
          {filteredData.map(item => (
            <li key={item.id}>
              <button style={{width:'100%', border:'none', height:'50px'}} onClick={() => handleItemClick(item)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBarCom;