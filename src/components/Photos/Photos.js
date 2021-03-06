import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPhotos } from '../../redux/actions';
import axios from 'axios'
import './Photos.css'
import MasonryImages from '../../shared/MasonryImages';

function Photos({search, orientation, color}) {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [current, setCurrent] = useState(null)
    
    useEffect( () => {
        const fetchPhotos = async () => {
            try {
                const result = await axios.get(`https://api.unsplash.com/search/photos?query=${search}&orientation=${orientation}&color=${color}&per_page=80`, {
                    headers: {
                        "Authorization": "Client-ID " + API_KEY,
                    }
                })
                dispatch(addPhotos(result.data.results))
            }
            catch(error)
            {
                console.log(error.message)
            }
        }        
        if(search !== "" && search.trim() !== "")
        {
            fetchPhotos()
        }
    }, [search, orientation, color])

    return (
                <div className="photos">
                    <MasonryImages current={current} setCurrent={setCurrent} photos={photos} />
                </div>
    )
}

export default Photos
