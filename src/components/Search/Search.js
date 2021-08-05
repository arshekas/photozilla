import React  from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'
import {DebounceInput} from 'react-debounce-input';
import Filters from '../Filters/Filters';


function Search({ search, handleSearch, handleOrientation, handleColor}) {

    return (
        <div className="searchBar">
            <div className="search">
                <DebounceInput
                    minLength={3}
                    debounceTimeout={100}
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                    type="search"
                />    
                <SearchIcon />
            </div>
            <Filters handleColor={handleColor} handleOrientation={handleOrientation} />
        </div>
    )
}

export default Search
