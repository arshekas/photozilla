import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'
import NativeSelect from '@material-ui/core/NativeSelect';
import {DebounceInput} from 'react-debounce-input';


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
            <div className="filters">
                <div className="orientation">
                    <span><b>Orientation: </b></span>
                    <input type="radio" onChange={handleOrientation} value="landscape" name="orientation" /> Landscape
                    <input type="radio" onChange={handleOrientation} value="portrait" name="orientation" /> Portrait
                    <input type="radio" onChange={handleOrientation} value="squarish" name="orientation" /> Squarish
                </div>
                <div className="color">
                <span><b>Color: </b></span>
                <NativeSelect id="color" onChange={handleColor}>
                    <option value="black_and_white">Black & White</option>
                    <option value="black">Black</option>
                    <option value="white">White</option> 
                    <option value="yellow">Yellow</option> 
                    <option value="orange">Orange</option> 
                    <option value="red">Red</option> 
                    <option value="purple">Purple</option> 
                    <option value="magenta">Magenta</option> 
                    <option value="green">Green</option> 
                    <option value="blue">Blue</option> 
                    <option value="teal">Teal</option> 
                </NativeSelect> 
                </div>
            </div>
        </div>
    )
}

export default Search
