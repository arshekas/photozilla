import { ADD_PHOTOS, HIDE_LOADER, SHOW_LOADER } from "./constants";

const initialState = {
    loading: false,
    photos: []
}

function photosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default photosReducer;