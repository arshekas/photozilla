import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';
import { addPhotos } from '../../redux/actions';
import Photo from '../Photo/Photo'
import axios from 'axios'
import './Photos.css'

function Photos({search, orientation, color}) {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(orientation)

    useEffect( () => {
        const fetchPhotos = async () => {
            try {
                const result = await axios.get(`https://api.unsplash.com/search/photos?query=${search}&orientation=${orientation}&color=${color}&per_page=80`, {
                    headers: {
                        "Authorization": "Client-ID hMTUT5nByURkkOVaJa7Mm-cFk9GXyCWK52p-096jo4U",
                    }
                })
                dispatch(addPhotos(result.data.results))
            }
            catch(error)
            {
            }
        }        
        if(search !== "")
        {
            fetchPhotos()
        }
    }, [search, orientation, color])


    // useEffect(() => {
    //     if(!photos.length)
    //     {
    //         const firstFetch = async () => {
    //             try {
    //                 const result = await axios.get(`${BASE_URL}/photos?per_page=30`, {
    //                     headers: {
    //                         "Authorization": "Client-ID " + API_KEY ,
    //                     }
    //                 })
    //                 console.log(result.data)
    //                 dispatch(addPhotos(result.data))
    //             }
    //             catch(error)
    //             {
    //                 console.log(error)
    //             }
    //         }
    //         firstFetch()
    //     }
    // }, [])

    return (
        <div className="photos">
            {console.log(photos)}
            <Masonry options={{ isFitWidth: true }}>
                {   
                    (photos.length 
                    ?
                        photos.map(photo => 
                            <Photo key={photo.id} photo={photo} />
                        )
                    :
                    ""
                    )
                }
            </Masonry>
        </div>
    )
}

export default Photos
