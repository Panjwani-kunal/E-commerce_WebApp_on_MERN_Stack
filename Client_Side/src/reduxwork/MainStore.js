import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import cartReducer from "./CartSlice"
 
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistconfig = {
    key : 'cloth',
    storage
}

const rootReducer = combineReducers({
    authdata : authReducer,
    cartdata : cartReducer
})
const persistedReducer = persistReducer(persistconfig, rootReducer)

export const MainStore = configureStore({
    reducer : {
        per : persistedReducer
    },
    middleware  : [thunk]
});

export const persistordata = persistStore(MainStore)