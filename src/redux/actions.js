import { ADD_PHOTOS, HIDE_LOADER, SHOW_LOADER } from "./constants"

export const addPhotos = photos => ({
    type : ADD_PHOTOS,
    payload : photos
})

export const showLoader = () => ({
    type: SHOW_LOADER,
})
export const hideLoader = () => ({
    type: HIDE_LOADER,
})