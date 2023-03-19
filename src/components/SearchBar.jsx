import React from 'react';
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css"



const SearchBar = () => {
  return (
    <div className='input-wrapper'>
        <BiSearch id = "search-icon"/>
        <input placeholder='Type to search...' list='programmingLanguages' />


        <datalist id="programmingLanguages"  style={{}}>
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
            </datalist>
    </div>
  )
}

export default SearchBar