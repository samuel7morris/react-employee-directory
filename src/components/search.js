import React from 'react';


function Search({handleSearch}) {
  return (
    <div className="App">
         <input className="input" placeholder="search employee here"  onChange = {event => handleSearch(event)}></input>
         <button className="search">Search</button>
    </div>
  );
}

export default Search;
