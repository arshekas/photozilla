import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Link className="logo" to="/">PhotoZilla</Link>
            <div className="category">
                <Link to="/favourite">Favourites</Link>
            </div>
        </div>
    )
}

export default Header
