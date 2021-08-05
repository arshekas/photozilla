import React from 'react'
import './Photo.css'

function Photo({photo, handleClick}) {
    return (
        <div onClick={() => handleClick(photo)} className="photo">
            <img src={photo.urls?.thumb} alt={photo.alt_description} />
        </div>
    )
}

export default Photo
