import React, { useState, useEffect }  from 'react';
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css"
import "../prof.json"
import SearchBarCom from './SearchBarCom';


const SearchBar = () => {

  return (
    <div>
      <SearchBarCom/>
    </div>
  );

  
  /*
  const [data, setData] = useState([]);
  


  useEffect(() => {
    fetch('prof.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className='input-wrapper'>
        <BiSearch id = "search-icon"/>
        <>
      <input list="proffs" />
      <datalist id="proffs">
        {proffs.map((proffs, index) => (
          <option key={index} value={proffs} />
        ))}
      </datalist>
    </>
    </div>
  )*/
}

export default SearchBar