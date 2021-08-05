import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import MasonryImages from '../../shared/MasonryImages';
import { addToFavourite, clearFavourites } from '../../redux/actions';
import './Favourite.css'
function Favourite() {

    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites)
    const [current, setCurrent] = useState(null)
    return (
        <div className="favourite">
            {favourites.length ? <Button className="clear" onClick={() => dispatch(clearFavourites())} variant="contained">Clear Favourites</Button> : ""}
            <MasonryImages current={current} setCurrent={setCurrent} photos={favourites} isFavourite />
        </div>
    )
}

export default Favourite
