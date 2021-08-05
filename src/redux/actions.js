import { ADD_PHOTOS, ADD_TO_FAVOURITE, CLEAR_FAVOURITE, REMOVE_FROM_FAVOURITE } from "./constants"

export const addPhotos = photos => ({
    type : ADD_PHOTOS,
    payload : photos
})

export const addToFavourite = photo => ({
    type: ADD_TO_FAVOURITE,
    payload: photo
})
export const removeFromFavourite = photo => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: photo
})
export const clearFavourites = () => ({
    type: CLEAR_FAVOURITE,
})
