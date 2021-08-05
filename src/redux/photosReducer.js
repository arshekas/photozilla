import Photo from "../components/Photo/Photo";
import { ADD_PHOTOS, ADD_TO_FAVOURITE, CLEAR_FAVOURITE, REMOVE_FROM_FAVOURITE } from "./constants";
const initialState = {
    loading: false,
    photos: [],
    favourites: [],
}

function photosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            }
        case ADD_TO_FAVOURITE:
            const found = state.favourites.filter(favourite => favourite.id === action.payload.id)
            if(found.length)
            {
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    favourites: [...state.favourites, action.payload]
                }   
            }
        case REMOVE_FROM_FAVOURITE: 
        const filtered = state.favourites.filter(favourite => favourite.id !== action.payload.id)
            return {
                ...state,
                favourites: filtered
            }
        case CLEAR_FAVOURITE:
            return {
                ...state,
                favourites: []
            }
        default:
            return state;
    }
}

export default photosReducer;