import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import appReducer from './reducers/appReducer'

export const store = configureStore({
    reducer:{
        auth:userReducer,
        app:appReducer
    }
})


export const server = "https://dummyjson.com"
