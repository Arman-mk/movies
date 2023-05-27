import {api} from '@shared/store/api/server-api'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import {moviesApi} from '@features/movies/model/store/teachers-api';
import appSlice from '@store/app/app.slice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
        app: appSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
