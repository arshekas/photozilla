import React, { useState } from 'react'
import Photos from '../../components/Photos/Photos'
import Search from '../../components/Search/Search'

function Homepage() {
    const [search, setSearch] = useState('')
    const [orientation, setOrientation] = useState('landscape')
    const [color, setColor] = useState('black')

    const handleOrientation=(e)=>{
        setOrientation(e.target.value)
    }

    const handleColor=(e)=>{
        setColor(e.target.value)
    }
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className="homepage">
            <Search search={search} handleSearch={handleSearch} handleOrientation={handleOrientation} handleColor={handleColor}/>
            <Photos search={search} orientation={orientation} color={color}/>
        </div>
    )
}

export default Homepage
