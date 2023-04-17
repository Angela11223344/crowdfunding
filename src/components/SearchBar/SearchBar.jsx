//import { useState, useEffect } from "react-router-dom"

//CSS
import "./SearchBar.css";

function SearchBar() {

    //under construction

    return <>
            <form action="/" method="get">
                <label htmlFor="header-search">
            <span className="visually-hidden">Search all projects...</span>
                </label>
                    <input
                    type="text"
                    id="header-search"
                    placeholder="Search all projects..."
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
            
        </>
};

export default SearchBar;