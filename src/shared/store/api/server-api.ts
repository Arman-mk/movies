import {API_URL} from '@shared/constants/app'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers, {getState}) => {
            return headers
        },
    }),
    tagTypes: ['auth'],
    endpoints: (builder) => ({}),
})
