import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "./reducers";
import {notificationsApi} from "@services/notificationsApi";


export const setStore = (preloadedState = {}) => {
    return configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => {
           return getDefaultMiddleware().concat(notificationsApi.middleware)
        },
        preloadedState
    })
}

const store = setStore({});
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
