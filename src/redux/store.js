import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import photoReducer from './photosReducer'

const persistConfig = {
    key: "photos",
    storage,
};

storage.removeItem('persist:root')

const pReducer = persistReducer(persistConfig, photoReducer)

const store = createStore(pReducer)

const persistor = persistStore(store)

export {store, persistor}