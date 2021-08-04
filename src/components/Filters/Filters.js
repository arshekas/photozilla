import React from 'react'

function Filters({handleOrientation}) {
    return (
        <div className="filters">
            <input type="radio" onChange={handleOrientation} value="landscape" name="orientation" /> Landscape
            <input type="radio" onChange={handleOrientation} value="portrait" name="orientation" /> Portrait
            <input type="radio" onChange={handleOrientation} value="squarish" name="orientation" /> Squarish
        </div>
    )
}

export default Filters
