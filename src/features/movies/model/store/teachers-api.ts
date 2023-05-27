import {api} from '@shared/store/api/server-api'
import {IMovie} from '@features/movies/lib/types';

export const moviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<IMovie[], void>({
            query: () => ({
                url: '/movies',
            }),
        }),
        getMovie: build.query({
            query: (id) => ({
                url: `/movies/${id}`,
            }),
        }),
    }),
})

export const {useGetMoviesQuery, useGetMovieQuery} = moviesApi
