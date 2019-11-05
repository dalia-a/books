import React from 'react';

const Search =(props) => {
    return(
       <div className="search">
        <form onSubmit={props.seachBook}action ="">
        <input onChange={props.handleSearch} type="text"/> 
        <button type="Submit"> Search</button>   
            </form>   
           
            </div>

    );
}

export default Search;