import React from 'react'
import './Photo.css'

function Photo({photo}) {
    return (
        <div className="photo">
            <img src={photo.urls.thumb} alt={photo.alt_description} />
        </div>
    )
}

export default Photo
