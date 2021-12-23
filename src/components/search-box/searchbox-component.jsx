import react from "react";
import './search-box.css'

export const SearchBox = ({placeholder , handleChange}) => {
    return (
        <input 
                className="search"
                type="search" 
                onChange={handleChange} 
                name="search_monster" 
                id="search" 
                placeholder={placeholder}

        />
    )
}