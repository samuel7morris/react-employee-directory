import React from 'react';


function Search({handleSearch}) {
  return (
    <div className="App">
         <input className="input m-3 col-md-3" placeholder="search by employee here"  onChange = {event => handleSearch(event)}></input>
         <br></br>
         <input className="input mx-3 col-md-3" placeholder="search by phone here"  onChange = {event => handleSearch(event)}></input>

    </div>
  );
}

export default Search;
