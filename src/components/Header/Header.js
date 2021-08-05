import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

function Header() {
    return (
        <div className="header">
            <Link className="logo" to="/">PhotoZilla</Link>
            <div className="category">
                <Link to="/favourite"><FavoriteIcon /></Link>
            </div>
        </div>
    )
}

export default Header
